machineName: SLOT魁!!男塾〜目指せ！闘宴大武會〜
manufacturer: ミズホ（ユニバーサルエンターテインメント系列）
releaseDate: 2017-09-19
recordNumber: 1139
generation: 5号機（5.5号機世代）
systemType: A+ART / CZ搭載 / 自力継続型
formalModelName: SLOT魁!!男塾BM
certificationNumber: 7S0681
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7

## identity
- HAZUSE、P-WORLD、当時解析、複数導入資料でミズホ製・2017-09-19導入が一致。
- 正式型式は中古実機DB・HAZUSE系表記で **SLOT魁!!男塾BM**。
- 鹿児島県公安委員会の2017-07-11公告で「男塾BM / 株式会社ミズホ / 検定番号7S0681」を直接確認。
reliability: OFFICIAL_PUBLIC_NOTICE_PLUS_DATABASE_MULTI_SOURCE

## payoutRateBySetting
- 設定1: **98.3%**
- 設定2: **99.4%**
- 設定3: **101.5%**
- 設定4: **104.0%**
- 設定5: **110.5%**
- 設定6: **119.1%**
- P-WORLD、ちょんぼりすた、当時すろかいで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### BIG
- 設定1: **1/1057.0**
- 設定2: **1/1040.3**
- 設定3: **1/1024.0**
- 設定4: **1/1008.2**
- 設定5: **1/963.8**
- 設定6: **1/910.2**

### ART初当たり
- 設定1: **1/347.8**
- 設定2: **1/336.3**
- 設定3: **1/317.5**
- 設定4: **1/291.9**
- 設定5: **1/237.9**
- 設定6: **1/195.6**

### CZ出現率
- 設定1: **1/157.8**
- 設定2: **1/154.3**
- 設定3: **1/149.8**
- 設定4: **1/142.6**
- 設定5: **1/125.3**
- 設定6: **1/111.9**
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- canonical yardstick: **約39.7G/50枚**。
- ちょんぼりすた、当時すろかいで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- ART: **ボーナス込み約1.8枚/G**。
- P-WORLD、ちょんぼりすた、当時すろかいで一致。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## basicPayout
- BIG: **平均約200枚**。P-WORLDでは264枚を超える払い出しで終了、平均200枚と記載。
- ART「大威震八連制覇」: 初当たり時20Gの導入ARTを経由し、1試合平均約30G。
- ART「闘宴大武會」: 1試合平均約25G。
- 引き戻しART「大鐘音チャンス」: 10G+α。
reliability: DATABASE_PLUS_ANALYSIS_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はCBを5回引くごとにCZ抽選を行う周期システム。
- CZは「直進行軍」「油風呂」「驚邏大四凶殺」の3系統。
- 通常天井は **BIGボーナス+ART間1000G+前兆**、到達時ART「大威震八連制覇」確定。
- 設定変更時初回のみCZ抽選周期が「特殊周期」へ移行し、CZ/ART期待度は **約37%**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior
schemaVersion: v0.7
resetQaStatus: RESEARCHED_WITH_DIRECT_SETTING_CHANGE_VS_POWER_CYCLE_COMPARISON_AND_PUBLIC_RESET_NUMERICS
resetQaLastUpdated: 2026-09-09

### settingChangeBehavior
- 設定変更時は **天井RESET / 再抽選**。
- **内部状態RESELECT**。
- CZ抽選周期は初回のみ **特殊周期**へ移行し、その後は周期Aへ移行。
- 設定変更時は初期CBポイントを0〜4ptで再抽選する。
- 液晶ステージは当時主要解析で調査中のため確定契約化しない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### carryOverBehavior
- 据え置き時は、設定変更を行わないため天井進捗・内部状態・通常周期側を引き継ぐ扱い。
- 純電源OFF→ONの直接比較資料で天井・内部状態のCARRYOVERを確認しており、ホール据え置きの主要契約も同系統として扱う。
reliability: ANALYSIS_HIGH_BY_DIRECT_POWER_CYCLE_COMPARISON

### powerCycleBehavior
- 純電源OFF→ON: **天井CARRYOVER**。
- 純電源OFF→ON: **内部状態CARRYOVER**。
- 液晶ステージは設定変更時・電源OFF→ON時とも主要解析で「調査中」。
- 純電源OFF→ON時のCBポイント/周期の本機固有直接契約は、表記揺れ・据え置き・電断・朝一・周期/CBポイントで再探索したが、天井・内部状態ほど明示的な比較値を固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_CEILING_AND_STATE / UNVERIFIED_FOR_CB_POINT_AND_CYCLE_DIRECT_CONTRACT

### gameCounterReset
- settingChange: **RESET**。
- stay setting / pure power OFF→ON: **CARRYOVER**。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### ceilingAfterReset
- normalCeiling: **BIG+ART間1000G+前兆**。
- 設定変更専用の固定短縮天井は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 設定変更では天井到達までの進捗が消えるため、前日ハマリは宵越しできない。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### modeAfterReset
- 設定変更時初回のみCZ抽選に関わる **特殊周期**へ移行。
- 特殊周期のCZ/ART期待度: **約37%**。
- 特殊周期でCZ当選時は **直進行軍 or 油風呂が大半**。
- 特殊周期消化後の次回周期は **A確定**。
- 通常周期A〜Dの全抽選テーブルは完全再現用詳細のため本レコードでは収集対象外。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

### stateAfterReset
- settingChange: **内部状態RESELECT**。
- pure power OFF→ON: **内部状態CARRYOVER**。
- 設定変更時の低確/通常/高確/超高確の初期振り分け数値は、HAZUSE・ちょんぼりすた・当時解析・検索語変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_RESELECT_CARRYOVER / UNVERIFIED_FOR_INITIAL_STATE_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更時初回のみ **特殊周期（CZ/ART期待度約37%）** へ入る。
- 初期CBポイントが0〜4ptで振り分けられるため、0pt以外なら通常より早く初回鬼ヒゲジャッジへ到達し得る。
- 初期CBポイント振り分け:
  - 0pt: **46.8%**
  - 1pt: **25.0%**
  - 2pt: **12.5%**
  - 3pt: **9.4%**
  - 4pt: **6.3%**
reliability: ANALYSIS_HIGH_WITH_PUBLIC_RESET_NUMERIC_TABLE

### resetPenalties
- 前日天井進捗および有利な内部状態は設定変更で失われる。
- 設定変更専用の固定追加ペナルティは **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_LOST_CARRYOVER / NONE_CONFIRMED_FOR_FIXED_PENALTY

### resetDetection
- 設定変更時の初期CBポイント抽選により、朝一初回周期で通常開始では説明しにくい複数CBポイントを確認できた場合は **設定変更濃厚**とする解析がある。
- 初回鬼ヒゲジャッジが特殊周期挙動を示すことも設定変更推測材料。
- 「SLOT魁!!男塾 / BM / ミズホ」と「ガックン / リールガックン / 朝一出目 / ランプ / 据え置き」を組み合わせて再探索したが、本機固有の確定ガックン契約は固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ステージは設定変更/電断とも調査中のため確定判別には使わない。
reliability: ANALYSIS_HIGH_FOR_CB_POINT_BASED_INFERENCE / UNVERIFIED_FOR_GAKKUN_DETERMINISM

### numericResetData
- normalCeiling: **1000G + 前兆 (BIG+ART間)**
- settingChangeGameCounter: **RESET**
- purePowerCycleGameCounter: **CARRYOVER**
- settingChangeInternalState: **RESELECT**
- purePowerCycleInternalState: **CARRYOVER**
- resetFirstCycle: **SPECIAL_CYCLE**
- resetSpecialCycleCzArtExpectation: **約37%**
- resetNextCycleAfterSpecial: **A**
- resetInitialCbPoint0: **46.8%**
- resetInitialCbPoint1: **25.0%**
- resetInitialCbPoint2: **12.5%**
- resetInitialCbPoint3: **9.4%**
- resetInitialCbPoint4: **6.3%**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- purePowerCycleCbPointAndCycle: **UNVERIFIED_AFTER_RESEARCH**
- gakkunDetection: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- メーカー表記はP-WORLD/HAZUSE/中古DBでは **ミズホ**、一部当時解析では系列全体を指して「ユニバーサル」と表記。製造者は公安委員会公告の **株式会社ミズホ** をcanonicalとし、ユニバーサルは系列表記として扱う。
- 機種呼称には「SLOT魁!!男塾」「魁！男塾〜目指せ！闘宴大武會〜」等の表記差があるが、型式 `SLOT魁!!男塾BM` と同一機種として統合。

## missingFields
- 設定変更時の内部状態初期振り分け: **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時のCBポイント/周期の直接契約: **UNVERIFIED_AFTER_RESEARCH**。
- 設定変更/電源OFF時の液晶ステージ確定契約: **UNVERIFIED_AFTER_RESEARCH**。
- 本機固有の確定ガックン発生率・対策時挙動: **UNVERIFIED_AFTER_RESEARCH**。

## sources
取得日: 2026-09-09
- 鹿児島県公安委員会 公告（2017-07-11、製造者ミズホ / 男塾BM / 検定番号7S0681）: https://www.pref.kagoshima.jp/ab04/kensei/jourei/kouhou/1707/documents/60424_20170710165230-1.pdf
- HAZUSE DATA（導入日/メーカー/型式系統/設定変更時CBポイント更新情報）: https://data.hazuse.com/?genre=209&machine_code=7S0681
- P-WORLD（メーカー/性能コア/ART/天井/獲得性能）: https://www.p-world.co.jp/machine/database/8500
- ちょんぼりすた（性能コア/天井/設定変更vs電源OFF→ON/特殊周期/初期CBポイント）: https://chonborista.com/slot/universal-slot/45177/
- すろかい 当時解析（2017-09-29、導入日/型式/性能コア/特殊周期）: https://slotkaiseki.hatenablog.com/entry/otokojyuku
- スロ安サーチ 中古実機DB（型式/5.5号機/A+ART/導入日）: https://slot-price.com/slot_price_details/id/1164
