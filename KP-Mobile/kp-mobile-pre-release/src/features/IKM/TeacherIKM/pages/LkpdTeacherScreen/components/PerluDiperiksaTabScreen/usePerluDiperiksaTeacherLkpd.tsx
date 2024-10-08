import {useNavigate} from '@hooks/useNavigate';
import {useIsFocused} from '@react-navigation/native';
import {
  useTeacherLkpdActions,
  useTeacherLkpdDataChecked,
  useTeacherLkpdReqBodyChecked,
  useTeacherLkpdSearchChecked,
} from '../../zustand';
import {useMergeState} from '@constants/functional';
import {useEffect, useMemo} from 'react';
import {useDisclosure} from '@hooks/useDisclosure';
import {useAllSubjects, useListPhaseClass} from '@features/IKM/zustand';

const usePerluDiperiksaTeacherLkpd = () => {
  const isFocused = useIsFocused();
  const {navigateScreen} = useNavigate();
  const teacherLkpdCheckedData = useTeacherLkpdDataChecked();
  const teacherLkpdReqBodyChecked = useTeacherLkpdReqBodyChecked();

  const subjectData = useAllSubjects();

  const teacherLkpdSearch = useTeacherLkpdSearchChecked();
  const listPhaseClass = useListPhaseClass();

  const {
    setMode: setTeacherLkpdMode,
    setSearch: setTeacherLkpdSearch,
    getDataChecked,
    setReqBodyChecked,
    setCurrentType,
    resetSearch,
  } = useTeacherLkpdActions();
  const {
    isVisible: isShowSwipeupMapel,
    hide: hideSwipeupMapel,
    show: showSwipeupMapel,
  } = useDisclosure();

  const {
    isVisible: isShowSwipeupFase,
    hide: hideSwipeupFase,
    show: showSwipeupFase,
  } = useDisclosure();

  const mapingSubject = (subjects: Array<IKMSubject>) =>
    (subjects || [])?.map((subject: IKMSubject) => {
      return {
        id: subject.subject_details?.[0].id,
        name: subject.subject_details?.[0].name,
        value: subject.subject_details,
      } as BaseFilter;
    });

  const mapingPhase = (phase: Array<IPhaseClass>) =>
    (phase || [])?.map((phase: IPhaseClass) => {
      return {
        id: phase.id,
        name: phase.name,
        value: phase,
      } as BaseFilter;
    });

  const mappedSubjectData: Array<BaseFilter<any>> = useMemo(
    () => mapingSubject(subjectData),
    [subjectData],
  );

  const mappedPhaseData: Array<BaseFilter<any>> = useMemo(
    () => mapingPhase(listPhaseClass),
    [],
  );

  const currentSelectedSubject: () => Array<BaseFilter<any>> = () => {
    const currentSubjects = subjectData.filter(subject =>
      teacherLkpdReqBodyChecked.subject_id?.includes(
        subject.subject_details?.[0].id || 0,
      ),
    );
    return mapingSubject(currentSubjects);
  };

  const currentSelectedPhase: () => Array<BaseFilter<any>> = () => {
    const currentPhases = listPhaseClass.filter(phase =>
      teacherLkpdReqBodyChecked.class_id?.includes(phase.id || 0),
    );
    return mapingPhase(currentPhases);
  };

  const onApplyFilterSubject = (data: Array<BaseFilter<IKMSubject>>) => {
    hideSwipeupMapel();

    setReqBodyChecked({
      offset: 0,
      subject_id: data.map(subject => {
        return subject.id || 0;
      }),
    });
  };

  const onApplyFilterPhase = (data: Array<BaseFilter<IPhaseClass>>) => {
    hideSwipeupFase();

    setReqBodyChecked({
      offset: 0,
      class_id: data.map(phase => {
        return phase.value.id || 0;
      }),
    });
  };

  const onResetFilterSubject = () => {
    hideSwipeupMapel();
    setReqBodyChecked({
      offset: 0,
      subject_id: [],
    });
  };
  const onResetFilterPhase = () => {
    hideSwipeupFase();
    setReqBodyChecked({
      offset: 0,
      class_id: [],
    });
  };

  const fetchData = () => {
    getDataChecked();
  };

  const onEndReached = () => {
    if (!isFocused) {
      return;
    }
    if (!teacherLkpdCheckedData) {
      return;
    }
    setReqBodyChecked({
      offset: teacherLkpdReqBodyChecked.offset! + 1,
    });
  };

  //listen when search text change
  useEffect(() => {
    if (!isFocused) {
      return;
    }
    if (!teacherLkpdCheckedData) {
      return;
    }

    setReqBodyChecked({
      search: teacherLkpdSearch,
      offset: 0,
    });
  }, [teacherLkpdSearch]);

  //fetchData
  useEffect(() => {
    fetchData();
  }, [teacherLkpdReqBodyChecked]);

  //setCurrentType
  useEffect(() => {
    if (!isFocused) {
      return;
    }
    setCurrentType('Checked');
  }, [isFocused]);

  const [state, setState] = useMergeState({
    isShowSwipeUpOption: false,
    swipeUpData: '',
  });

  const {isShowSwipeUpOption, swipeUpData} = state;

  return {
    navigateScreen,
    isShowSwipeUpOption,
    setState,
    teacherLkpdSearch,
    setTeacherLkpdSearch,
    teacherLkpdCheckedData,
    setTeacherLkpdMode,
    isShowSwipeupMapel,
    showSwipeupMapel,
    hideSwipeupMapel,
    isShowSwipeupFase,
    showSwipeupFase,
    hideSwipeupFase,
    listPhaseClass,
    mappedSubjectData,
    mappedPhaseData,
    onApplyFilterSubject,
    onApplyFilterPhase,
    onResetFilterSubject,
    onResetFilterPhase,
    currentSelectedSubject,
    currentSelectedPhase,
    onEndReached,
    swipeUpData,
    resetSearch,
  };
};

export default usePerluDiperiksaTeacherLkpd;
