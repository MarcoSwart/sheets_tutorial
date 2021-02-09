function AuthorizeView({ handleAuth }) {
    return (
        <div className="col-sm-6">
            <button
                className="btn btn-secondary  btn-sm"
                id="authorize_button"
                onClick={() => handleAuth}>
                Authorize
            </button>
        </div>
    );
}

export default AuthorizeView;