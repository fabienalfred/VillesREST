package villes.dao;

import java.util.List;

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import villes.entities.Ville;

@Stateless
public class VillesDAO {

	@PersistenceContext(unitName="france") private EntityManager em;
	
	@SuppressWarnings("unchecked")
	public List<Ville> getVillesByCodePostal(String cp){
		return em.createNamedQuery("Ville.getVillesByCodePostal")
				.setParameter("cp", cp+"%")
				.getResultList();
	}
	
	@SuppressWarnings("unchecked")
	public List<Ville> getVillesByNom(String nom){
		return em.createNamedQuery("Ville.getVillesByNom")
				.setParameter("nom", nom+"%")
				.getResultList();
	}
	
}
