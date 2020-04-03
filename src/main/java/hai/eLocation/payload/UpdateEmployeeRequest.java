package hai.eLocation.payload;

public class UpdateEmployeeRequest {
	private long employeeId;
	private String name;
	private boolean flexWorkplace;
	private String workplaceLocation;
	public long getEmployeeId() {
		return employeeId;
	}
	public void setEmployeeId(long employeeId) {
		this.employeeId = employeeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public boolean isFlexWorkplace() {
		return flexWorkplace;
	}
	public void setFlexWorkplace(boolean flexWorkplace) {
		this.flexWorkplace = flexWorkplace;
	}
	public String getWorkplaceLocation() {
		return workplaceLocation;
	}
	public void setWorkplaceLocation(String workplaceLocation) {
		this.workplaceLocation = workplaceLocation;
	}
}
