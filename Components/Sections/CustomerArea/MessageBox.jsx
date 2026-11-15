export const MESSAGE_BOX_ERROR = 1
export const MESSAGE_BOX_SUCCESS = 2
export const MESSAGE_BOX_INFO = 3

const MessageBox = (props) => {
		const { kind, children } = props

		return (
				<div className={[
						'alert',
						(kind === MESSAGE_BOX_ERROR) && 'alert-danger',
						(kind === MESSAGE_BOX_SUCCESS) && 'alert-success',
						(kind === MESSAGE_BOX_INFO) && 'alert-info'
				].join(' ')}>
						{ children }
				</div>
		)
}

export default MessageBox
