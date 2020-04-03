package hai.eLocation.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import hai.eLocation.entity.Employee;
import hai.eLocation.entity.Workplace;
import hai.eLocation.exception.RecordNotFoundException;
import hai.eLocation.payload.AddEmployeeRequest;
import hai.eLocation.payload.UpdateEmployeeRequest;
import hai.eLocation.repository.EmployeeRepository;
import hai.eLocation.repository.WorkplaceRepository;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/emp")
public class EmployeeController {
	@Autowired 
	EmployeeRepository employeeRepository;
	
	@Autowired
	WorkplaceRepository workplaceRepository;

	@PostMapping("/add")
	public Employee addEmployee(@RequestBody AddEmployeeRequest addEmployeeRequest) {
		
		Employee newEmployee = new Employee();
		newEmployee.setName(addEmployeeRequest.getName());
		newEmployee.setFlexWorkplace(addEmployeeRequest.isFlexWorkplace());
		if (addEmployeeRequest.getWorkplaceLocation() != "") {
			Workplace workplace = workplaceRepository.findByLocation(addEmployeeRequest.getWorkplaceLocation()).orElseThrow(() -> new RuntimeException("Error: Workplace is not found."));
			newEmployee.setWorkplace(workplace);
		}
		return employeeRepository.save(newEmployee);
	}

	@PostMapping("/update")
	public Employee updateEmployee(@RequestBody UpdateEmployeeRequest updateEmployeeRequest) throws RecordNotFoundException {
		Employee toUpdateEmployee = employeeRepository.findById(updateEmployeeRequest.getEmployeeId()).orElseThrow(() -> new RecordNotFoundException("Record not found!"));
		toUpdateEmployee.setName(updateEmployeeRequest.getName());
		toUpdateEmployee.setFlexWorkplace(updateEmployeeRequest.isFlexWorkplace());
		toUpdateEmployee.removeWorkplace();
		if (updateEmployeeRequest.getWorkplaceLocation() != "") {
			Workplace workplace = workplaceRepository.findByLocation(updateEmployeeRequest.getWorkplaceLocation()).orElseThrow(() -> new RuntimeException("Error: Workplace is not found."));
			toUpdateEmployee.setWorkplace(workplace);
		}
		return employeeRepository.save(toUpdateEmployee);
	}
	
	@GetMapping("/employeesList")
	public List<Employee> getAllEmployees() {
		List<Employee> employeesList = (List<Employee>) employeeRepository.findAll();
        return employeesList;
	}
	
	@GetMapping("/employee/{id}")
	public Employee getEmployeeById(@PathVariable("id") Long id) throws RecordNotFoundException {
		return employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record not found!"));
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteById(@PathVariable("id") Long id) throws IOException, RecordNotFoundException {
		//Employee employee = employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record not found!"));
		employeeRepository.deleteById(id);	
	}
}
