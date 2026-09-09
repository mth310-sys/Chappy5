更新日: 2026-09-09

## 現在地点
- recordCount: **1126**
- latestRecordAdded: **戦国美少女 織田信奈の野望**（D-light / ディ・ライト）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-08-28_sengoku-bishoujo-oda-nobuna-no-yabou.md`
- chronologicalFrontier: **2017-08-28**
- frontierLatestMachine: **戦国美少女 織田信奈の野望 — No.1126**
- schema: **resetBehavior v0.7**
- status: **2017-08-28_GROUP_CLOSED / NEXT_2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、直前No.1125「パチスロ 討鬼伝」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` ＋実レコードを進捗正本として採用。
- 開始時mainは **1125件 / chronologicalFrontier 2017-08-28 / 8/28群OPEN**。
- HANDOFF指定の次候補 **「戦国美少女 織田信奈の野望」** をGitHubコード検索し、同名既存レコードなしを確認してNo.1126として新規登録。
- HAZUSEでメーカー **D-light**、型式 **織田信奈の野望S**、検定番号 **7S0411**、導入 **2017-08-28** を固定。パチビー、すろぱちくえすと、期待値見える化、ALL7も8/28で一致。
- ちょんぼりすたのみ **2017-08-27** のため、平均せず `CONFLICT_2017_08_28_VS_2017_08_27`。canonicalは8/28。
- 性能コアは機械割 **97.5 / 99.1 / 100.1 / 104.6 / 108.0 / 112.0%**、ART初当たり **1/496 / 479 / 455 / 405 / 368 / 335**、約 **30G/50枚**。
- ART純増は定義分離し、**ART区間単体約1.6枚/G / ボーナス込み約2.0枚/G**。天下布武RUSHは **1セット40G以上**。良晴野ボーナス120枚、決戦の刻60枚、六将集結の儀20G。
- 通常時は100万石=1周期、通常天井 **600万石（6周期）**。六将集結の儀4回連続ART非当選後、5回目でART確定。
- resetBehavior v0.7は設定変更で **0～255万石ランダム加算 / モードA 100% / 森ステージ**、純電源OFF→ONで **周期石高・内部モード・六将集結の儀スルー回数CARRYOVER / 森ステージ** を保存。
- モードAの疑似ボーナス当選率は **200万石70.31% / 400万石76.56%**。朝一の主要リセット恩恵として保存。
- 0～255万石の個別振り分け率、設定変更時の六将集結の儀スルー回数、設定変更/純電断時の通常・高確内部状態、本機固有ガックン、「据え置き」と明記した独立操作契約は検索語・資料系統を変えた再探索後も直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1126 — 戦国美少女 織田信奈の野望
- manufacturer: **D-light（ディ・ライト）**
- releaseDate canonical: **2017-08-28**
- releaseDate conflict: **2017-08-28 vs 2017-08-27**
- formalModelName: **織田信奈の野望S**
- certificationNumber: **7S0411**
- generation/system: **5号機（5.5号機世代） / A+ART / 周期管理 / リアルボーナス+擬似ボーナス**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### performanceCore
- 機械割: **97.5 / 99.1 / 100.1 / 104.6 / 108.0 / 112.0%**。
- ART初当たり: **1/496 / 479 / 455 / 405 / 368 / 335**。
- 良晴野ボーナス: **1/245 / 243 / 237 / 230 / 227 / 223**。
- 六将集結の儀: **1/394 / 392 / 390 / 388 / 385 / 382**。
- 決戦の刻: **全設定1/8192**。
- baseGamesPer50: **約30G/50枚**。
- netIncrease: **ART単体約1.6枚/G / ボーナス込み約2.0枚/G**。
- 天下布武RUSH: **1セット40G以上**。
- 良晴野ボーナス **120枚** / 決戦の刻 **60枚** / 六将集結の儀 **20G**。

### resetBehavior v0.7
- settingChange: **周期石高RESET/RESEED（0～255万石ランダム加算） / モードA 100% / 森ステージ**。
- pure power OFF→ON: **周期石高CARRYOVER / 内部モードCARRYOVER / 六将集結の儀スルー回数CARRYOVER / 森ステージ**。
- normal ceiling: **600万石 / 6周期**。リアルボーナスを挟んでも有効。
- pseudo-bonus skip ceiling: **六将集結の儀4連続ART非当選 → 5回目ART確定**。
- reset mode A zone:
  - 100万石 **14.84%**
  - 200万石 **70.31%**
  - 300万石 **12.50%**
  - 400万石 **76.56%**
  - 500万石 **9.38%**
  - 600万石 **100%**
- resetBenefits: **0～255万石の周期進行加算 + モードA 100%**。
- resetDetection: 設定変更/電断とも森ステージのためステージ単独判別不可。ガックンは **UNVERIFIED_AFTER_RESEARCH**。
- advantageousSectionReset: **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## conflicts / unresolved
- releaseDate: **2017-08-28 vs 2017-08-27**。canonical 2017-08-28。
- ART純増: **ART単体約1.6枚/G / ボーナス込み約2.0枚/G** の定義差。CONFLICTではなく定義分離。
- 設定変更時の六将集結の儀スルー回数: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/純電断時の通常・高確内部状態: **UNVERIFIED_AFTER_RESEARCH**。
- 0～255万石ランダム加算の個別振り分け率: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有ガックン: **UNVERIFIED_AFTER_RESEARCH**。
- 据え置き独立操作契約: **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。

## 2017-08-28群監査 — CLOSED
- No.1125 **パチスロ 討鬼伝** — 登録済み。
- No.1126 **戦国美少女 織田信奈の野望** — 登録済み。
- ALL7の2017年8月導入一覧、すろぱちくえすとの2017年導入日一覧、2-9伝説の当時整理で8/28新規パチスロ本線を横断確認し、討鬼伝・織田信奈の野望で一致。
- **戦国乙女～TYPE-A～** はHAZUSEに2017-08-28表記があるが、既存No.1120レコードで既に **canonical 2017-08-21 / HAZUSE 2017-08-28 CONFLICT** を保持済み。重複新規レコードは作成しない。
- 以上より8/28群を **CLOSED** とする。

## 次境界 2017-09-04 — OPEN
- 8/28の次の主要導入境界は **2017-09-04**。
- すろぱちくえすと2017一覧では次候補群に **パチスロ北斗の拳 新伝説創造 / ぱちスロAKB48 勝利の女神 / 回胴性ミリオンアーサー / 笑ゥせぇるすまん3 / 亜人 / デビルマンχ / アメイジング・スパイダーマン / セイクリッドセブン / YASUDA7** 等を掲載。
- 一撃の2017年9月スケジュールは9/4を **北斗の拳 新伝説創造 / 亜人 / セイクリッドセブン / 笑ゥせぇるすまん3** の4機種としており、別資料ではAKB48・回胴性ミリオンアーサー・蒼き鋼のアルペジオ等も9/4表記がある。地域導入・掲載定義差の可能性があるため、9/4群は **OPEN** のまま全メーカー監査してからCLOSED判定する。
- 最優先次候補: **パチスロ北斗の拳 新伝説創造 — No.1127候補**。複数資料で2017-09-04導入を先行確認済み。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1126と8/28境界監査を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1126を再取得。
2. **1126件 / chronologicalFrontier 2017-08-28 / 2017-08-28群CLOSED / 2017-09-04群OPEN** を正本として継続。
3. **最優先:「パチスロ北斗の拳 新伝説創造」No.1127候補**。重複確認後、performance core + resetBehavior v0.7を収集・登録。
4. その後9/4群をメーカー・表記揺れ・地域導入差まで横断し、同日候補を順次回収してからCLOSED判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1126 戦国美少女 織田信奈の野望
- D-light / 大一公式: https://daiichi777.jp/product/detail/157/slot_odanobuna
- HAZUSE: https://hazuse.com/machine/pachislot/7S0411/
- HAZUSE ART/内部状態: https://hazuse.com/machine/pachislot/7S0411/genre/209/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_odanobuna/3/
- 一撃 モード移行: https://1geki.jp/slot/s_odanobuna/44/
- 一撃 石高システム: https://1geki.jp/slot/s_odanobuna/46/
- 一撃 ボーナス確率: https://1geki.jp/slot/s_odanobuna/1/
- 期待値見える化: https://slotjin.com/zone/odanobuna/
- すろぱちくえすと: https://www.slopachi-quest.com/article/slot-odanobunanoyabou/
- パチビー: https://www.pachibee.jp/machines/movie/217080001
- ALL7: https://www.all7.jp/plans/index/2017/08
- ちょんぼりすた: https://chonborista.com/slot/d-light/43538/

### 次境界 2017-09-04
- すろぱちくえすと 2017年導入一覧: https://www.slopachi-quest.com/article/2017-sindai/
- 一撃 2017年9月新台スケジュール: https://1geki.jp/newmachinecalender/201709/
