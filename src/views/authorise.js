function AuthorizeView({ signIn }) {
    return (
        <div className="row">
            <div className="col-sm-6">
                <button
                    className="btn btn-secondary  btn-sm"
                    id="authorize_button"
                    onClick={signIn}>
                    Authorize
            </button>
            </div>
        </div>
    );
}

export default AuthorizeView;