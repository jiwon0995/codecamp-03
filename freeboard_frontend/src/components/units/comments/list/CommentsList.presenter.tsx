import {
	Wrapper,
	IconBox,
	Icon,
	Writer,
	WriterBox,
	WriterBox1,
	Top,
	Contents,
	CommnetsAt
} from './CommentsList.styles';


export default function CommentsListUI(props) { 
	console.log(props)
	return (
		<Wrapper>
			{props.data?.fetchBoardComments.map((el) => (
				<div key={el._id}>
					<WriterBox>
						<div>
							<img src="/Vector.png" />
						</div>
						<Top>
							<WriterBox1>
								<Writer>{el.writer}</Writer>
								<div>
									<div>{el.rating}</div>
									<img src="/star.png" />
									<img src="/star.png" />
									<img src="/star.png" />
									<img src="/star.png" />
									<img src="/star.png" />
								</div>
							</WriterBox1>
							<Contents>{el.contents}</Contents>
							<CommnetsAt>{el.createdAt}</CommnetsAt>
						</Top>
					</WriterBox>
					<IconBox>
						<Icon src="/write.png" />
						<Icon src="/delete.png" />
					</IconBox>
				</div>
			))}
		</Wrapper>
	);
}