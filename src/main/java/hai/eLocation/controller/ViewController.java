package hai.eLocation.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping({ "/" })
public class ViewController {
	public String index() {
       return "forward:/index.html";
   }
}