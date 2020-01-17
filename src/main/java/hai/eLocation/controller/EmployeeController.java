package hai.eLocation.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import hai.eLocation.entity.Employee;
import hai.eLocation.exception.RecordNotFoundException;
import hai.eLocation.repository.EmployeeRepository;

@RestController
@CrossOrigin 
@RequestMapping("/api")
public class EmployeeController {
	@Autowired 
	EmployeeRepository employeeRepository;

	@PostMapping("add")
	public Employee addEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}

	@PostMapping("update/{id}")
	public Employee updateEmployee(@RequestBody Employee employee, @PathVariable("id") Long id) throws RecordNotFoundException {
		Employee oldEmployee = employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record not found!"));
		oldEmployee.setName(employee.getName());
		oldEmployee.setLocation(employee.getLocation());
		oldEmployee.setFloor(employee.getFloor());
		oldEmployee.setxCoord(employee.getxCoord());
		oldEmployee.setyCoord(employee.getyCoord());
		return employeeRepository.save(oldEmployee);
	}
	
	@GetMapping("employeesList")
	public List<Employee> getAllEmployees() {
		List<Employee> employeesList = (List<Employee>) employeeRepository.findAll();
        return employeesList;
	}
	
	@GetMapping("employee/{id}")
	public Employee getEmployeeById(@PathVariable("id") Long id) throws RecordNotFoundException {
		return employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record not found!"));
	}
	
	@DeleteMapping("delete/{id}")
	public void deleteById(@PathVariable("id") Long id) throws IOException, RecordNotFoundException {
		//Employee employee = employeeRepository.findById(id).orElseThrow(() -> new RecordNotFoundException("Record not found!"));
		employeeRepository.deleteById(id);	
	}
}
