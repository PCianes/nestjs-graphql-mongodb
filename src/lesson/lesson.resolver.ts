import { Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver(() => LessonType)
export class LessonResolver {
  @Query(() => LessonType)
  lesson() {
    return {
      id: 'fjkldsjf',
      name: 'Hello World',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
