package main;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ProjectController {

	@GetMapping("/index.do")
	public String index() {
		return "index";
	}
	@GetMapping("/company/index.do")
	public String comindex() {
		return "company/index";
	}
	@GetMapping("/company/map.do")
	public String companymap() {
		return "company/map";
	}
}
