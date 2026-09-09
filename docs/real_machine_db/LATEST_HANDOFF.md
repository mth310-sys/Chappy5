更新日: 2026-09-09

## 現在地点
- recordCount: **1127**
- latestRecordAdded: **パチスロ北斗の拳 新伝説創造**（Sammy）
- latestRecordAddedPath: `docs/real_machine_db/machines/2017-09-04_hokuto-no-ken-shin-densetsu-souzou.md`
- chronologicalFrontier: **2017-09-04**
- frontierLatestMachine: **パチスロ北斗の拳 新伝説創造 — No.1127**
- schema: **resetBehavior v0.7**
- status: **2017-09-04_GROUP_OPEN**

## 今回の同期 / 進捗
- 最新mainの `README.md`、mission v0.7、旧 `INDEX.md`、`LATEST_HANDOFF.md`、直前No.1126「戦国美少女 織田信奈の野望」を再取得して開始。
- INDEXは初期19件時点の旧スナップショットのため、README規定どおり最新 `LATEST_HANDOFF.md` + 実レコードを進捗正本として採用。
- 開始時mainは **1126件 / chronologicalFrontier 2017-08-28 / 8/28群CLOSED / 9/4群OPEN**。
- GitHubコード検索で「パチスロ北斗の拳 新伝説創造」の既存レコードなしを確認し、No.1127として新規登録。
- HAZUSEでメーカー **Sammy**、型式 **パチスロ北斗の拳 2017／XF**、検定番号 **7S0888**、導入 **2017-09-04** を固定。K-Navi・パチビー・一撃でも9/4一致。
- 性能コアは機械割 **97.8 / 98.9 / 100.9 / 105.2 / 108.7 / 115.1%**、宿命の刻初当たり **1/224.3 / 220.8 / 213.3 / 191.8 / 180.1 / 157.6**、ベース **約43.6～46.5G/50枚**、ART純増 **約1.9枚/G**。
- 宿命の刻は押し順ベル7回+バトル、突破期待度40%以上。メインART激闘乱舞は **1セット約30G+α / 継続率66～89%**。
- 通常G数天井 **710G+α**、設定変更時は **510G+α** に短縮。純電源OFF→ONでは天井CARRYOVER。
- 宿命の刻スルー天井は通常最大6スルー後の次回突破、設定変更時は最大4スルー後の次回突破へ短縮。
- 設定変更時スルー天井ポイント振り分けを設定別で保存。設定1・2は4ポイント98.4%、設定6は0～3各7.4% / 4が70.3%など。
- 設定変更時の内部状態再抽選も公開数値を保存。設定1～3は低確37.1 / 通常37.5 / 高確25.0 / 前兆0.4%、設定4～5は34.4 / 31.3 / 31.3 / 3.1%、設定6は31.3 / 25.0 / 37.5 / 6.3%。
- 設定変更・純電源OFF→ONとも通常開始時の液晶はバトロ/オグル/ビジャマを均等振り分け。
- リセット時は510G天井のため、通常運用の660G夜状態移行（99.6%）を初回では経由しない点を朝一の補助的不利要素として保存。
- ガックンは当時攻略で有効とされるが店舗対策可能・100%契約不明のため **POSSIBLE_GAKKUN_NONDETERMINISTIC**。
- 据え置きと明記した独立操作契約は再探索後も固定できず **UNVERIFIED_DIRECT_STAY_SETTING_CONTRACT_AFTER_RESEARCH**。純電断表は直接資料あり。
- 有利区間は **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

## No.1127 — パチスロ北斗の拳 新伝説創造
- manufacturer: **Sammy（サミー）**
- releaseDate: **2017-09-04**
- formalModelName: **パチスロ北斗の拳 2017／XF**
- certificationNumber: **7S0888**
- generation/system: **5号機（5.5号機世代） / ART / 突破型CZ-ART→メインART**
- recordStatus: **COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7**

### resetBehavior v0.7 要点
- settingChange: **G数天井510G+α / 状態再抽選 / 宿命スルー天井最大4 / 開始3ステージ均等**。
- pure power OFF→ON: **G数天井・状態・宿命スルー天井CARRYOVER / 開始3ステージ均等**。
- normal ceiling: **710G+α → 宿命の刻**。
- reset ceiling: **510G+α → 宿命の刻**。
- normal skip ceiling: **最大6スルー後、次回（7回目）突破**。
- reset skip ceiling: **最大4スルー後、次回（5回目）突破**。
- reset state settings1-3: **低37.1 / 通常37.5 / 高25.0 / 前兆0.4%**。
- reset state settings4-5: **低34.4 / 通常31.3 / 高31.3 / 前兆3.1%**。
- reset state setting6: **低31.3 / 通常25.0 / 高37.5 / 前兆6.3%**。

## 2017-09-04群 — OPEN
既確認候補:
1. **ぱちスロAKB48 勝利の女神**
2. **回胴性ミリオンアーサー**
3. **笑ゥせぇるすまん3**
4. **亜人**
5. **デビルマンχ**
6. **アメイジング・スパイダーマン**
7. **セイクリッドセブン**
8. **YASUDA7**
9. 資料によっては **蒼き鋼のアルペジオ -アルス・ノヴァ-** 等も9/4表記があるため、地域導入/掲載定義差を横断監査する。

## 遡及 resetBehavior QA
- retroQaScanConfirmedThrough: **2006-06_churahime-sun.md**。
- retroQaStatus: **SEQUENTIAL_SCAN_ACTIVE**。
- 次カーソル: `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md`。
- 今回は本線No.1127を優先し、QAカーソルは進めていない。

## 次回再開地点
1. 最新mainの README / mission v0.7 / INDEX / LATEST_HANDOFF / No.1127を再取得。
2. **1127件 / chronologicalFrontier 2017-09-04 / 9/4群OPEN** を正本として継続。
3. 最優先は **「ぱちスロAKB48 勝利の女神」No.1128候補**。重複確認後、performance core + resetBehavior v0.7を収集。
4. その後9/4群を全メーカー・表記揺れ・地域導入差まで横断し、候補を順次登録してからCLOSED判定。
5. 遡及QAは `docs/real_machine_db/machines/2006-06_thunderbirds-neo-xx.md` から継続。

## 主要出典 — 取得日 2026-09-09
### No.1127 パチスロ北斗の拳 新伝説創造
- HAZUSE: https://hazuse.com/machine/pachislot/7S0586/
- HAZUSE 基本スペック: https://hazuse.com/machine/pachislot/7S0586/genre/201/
- 一撃 機種概要: https://1geki.jp/slot/s_hokuto_shin/
- 一撃 天井/設定変更: https://1geki.jp/slot/s_hokuto_shin/3/
- 一撃 スルー天井: https://1geki.jp/slot/s_hokuto_shin/43/
- 一撃 状態移行: https://1geki.jp/slot/s_hokuto_shin/44/
- 一撃 夜状態: https://1geki.jp/slot/s_hokuto_shin/45/
- K-Navi: https://p-kn.com/slot/2857/
- パチビー: https://www.pachibee.jp/machines/index/217080007
- すろぱちくえすと リセット: https://www.slopachi-quest.com/article/hokuto-shindensetsusouzou-reset/
- イチカツ リセット/ガックン: https://ichikatsu.com/hokutoshindensetsu-reset/
