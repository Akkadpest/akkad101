"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

const API_ROOT = "https://gov.pestcontrol.ae/booking_api/";

export default function ServiceFeedback() {
  const params = useParams();
  const eventId = params.id;
  const [loading, setLoading] = useState(true);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    answer1: "",
    comment: "",
  });

  useEffect(() => {
    if (eventId) {
      fetch(`${API_ROOT}feedback_status?event_id=${eventId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.exist) {
            setFeedbackSubmitted(true);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error checking feedback:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [eventId]);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if (!formData.answer1) {
      alert("Please rate our service.");
      return;
    }

    setLoading(true);

    fetch(`${API_ROOT}post_feedback`, {
      method: "POST",
      body: JSON.stringify({
        event_id: eventId,
        answer1: formData.answer1,
        comment: formData.comment,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setFeedbackSubmitted(true);
          setFormData({ answer1: "", comment: "" });
        } else {
          alert("Something went wrong. Please try again later.");
        }
        setLoading(false);
      })
      .catch(() => {
        alert("Something went wrong. Please try again later.");
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!eventId) {
    return (
      <div className="container py-5">
        <h1 className="text-center mb-4 fw-bold fs-3">Service Feedback</h1>
        <p className="text-center">Booking not found</p>
      </div>
    );
  }

  if (feedbackSubmitted) {
    return (
      <div className="container py-5">
        <h1 className="text-center mb-4 fw-bold fs-3">Service Feedback</h1>
        <p className="text-center">Thank you for your feedback!</p>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <h1 className="text-center mb-4 fw-bold fs-3">Service Feedback</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-bold">
                How do you rate our service? *
              </label>
              <div className="d-flex flex-column gap-2">
                {[
                  { value: "1", label: "Excellent" },
                  { value: "2", label: "Good" },
                  { value: "3", label: "Not bad" },
                  { value: "4", label: "Bad" },
                ].map((option) => (
                  <div className="form-check" key={option.value}>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="answer1"
                      id={`rating-${option.value}`}
                      value={option.value}
                      checked={formData.answer1 === option.value}
                      onChange={() =>
                        setFormData((fd) => ({ ...fd, answer1: option.value }))
                      }
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`rating-${option.value}`}
                    >
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-4">
              <label className="form-label fw-bold" htmlFor="comment">
                Do you have any comments or remarks about the visit?
              </label>
              <textarea
                className="form-control"
                id="comment"
                name="comment"
                rows="4"
                value={formData.comment}
                onChange={(ev) =>
                  setFormData((fd) => ({ ...fd, comment: ev.target.value }))
                }
              />
            </div>

            <button
              type="submit"
              className="btn w-100 text-white"
              style={{ backgroundColor: "#6bb544" }}
            >
              Submit Feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
