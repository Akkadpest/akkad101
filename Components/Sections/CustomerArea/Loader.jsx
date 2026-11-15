const Loader = () => {
  const loaderStyle = {
    border: '16px solid #f3f3f3', /* Light grey */
    borderTop: '16px solid rgb(107, 181, 68)', /* Blue */
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    animation: 'spin 2s linear infinite'
  };

  const keyframesStyle = `
    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;

  return (
    <>
      <style>{keyframesStyle}</style>
      <div style={loaderStyle}></div>
    </>
  )
}

export default Loader
