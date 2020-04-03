package hai.eLocation.payload;

public class JwtResponse {
	private String token;
	private String type = "Bearer";
	private UserDetailsResponse userDetails;

	public JwtResponse(String accessToken, UserDetailsResponse userDetails) {
		this.token = accessToken;
		this.setUserDetails(userDetails);
	}

	public String getAccessToken() {
		return token;
	}

	public void setAccessToken(String accessToken) {
		this.token = accessToken;
	}

	public String getTokenType() {
		return type;
	}

	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}

	public UserDetailsResponse getUserDetails() {
		return userDetails;
	}

	public void setUserDetails(UserDetailsResponse userDetails) {
		this.userDetails = userDetails;
	}

	
}