package villes.services;

import java.util.List;

import javax.ejb.EJB;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import villes.dao.VillesDAO;
import villes.entities.Ville;

@Path("/villes")
public class VillesService {
	private static String CHARSET = "charset=UTF-8";

	@EJB private VillesDAO dao;
	
	
	@Path("/cp/{cp}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Ville> getVillesByCodePostal(@PathParam("cp") String cp){
		return dao.getVillesByCodePostal(cp);
	}
	
}
