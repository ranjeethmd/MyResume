using System;


namespace ProfileEngine.POCO
{
    public class ApiError
    {
        public ApiError(Guid id, string message)
        {
            Id = id;
            Message = message;
        }
        public Guid Id { get; }
        public string Message { get; }
    }
}
