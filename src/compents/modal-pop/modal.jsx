
export default function Modal({ id, header, body, footer }) {
    return (
        <div className="modalPop" id={id || 'Modal'}>
            <div className="moda-container">

                <div className="header">
                    <span className="close-modal-icon">&times;</span>
                    {
                        header ? header : <h2>Header</h2>
                    }
                </div>
                <div className="body">
                    {
                        body ? body : <div><p>This our modal body</p></div>
                    }
                </div>

                <div className="footer">
                    {
                        footer ? footer : <h2>Footer</h2>
                    }

                </div>
            </div>
        </div>
    );
}