package ru.bukharov.jointchoice.joint_choice_service.dto;

import java.util.List;

import static java.util.stream.Collectors.toList;

public abstract class DtoAssembler<A, B> {

    public List<B> convertToDtoList(List<A> input) {
        return input.stream().map(this::convertToDto).collect(toList());
    }

    public abstract B convertToDto(A a);
}
