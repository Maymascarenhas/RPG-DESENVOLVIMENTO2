package com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.controller.Credenciais;

import com.rpg3detdesenvolvimento.rpg3detdesenvolvimento.domain.Usuario;

@Repository
public interface TodosUsuarios 
	extends JpaRepository<Usuario, Long> {
	
	@Query("select u from Usuario u "
			+ "where u.credenciais = :credenciais")
	public Usuario buscarUsando(
			@Param("credenciais") Credenciais credenciais);

	@Query("select u from Usuario u where u.nome = :nome")
	public List<Usuario> obterPorNome(@Param("nome") String nome);
	
	
	@Query("select u from Usuario u where u.credenciais.Email = :login and u.credenciais.senha = :senha")
	public Usuario existe(@Param("login") String login, @Param("senha") String senha);
}
