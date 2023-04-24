package juntas.dto.qualification;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class QualificationResponseDto{
        private Long qualificationId;
        private Long fromUser;
        private Long toUser;
        private String comment;
        private Integer qualificationQuantity;

}
