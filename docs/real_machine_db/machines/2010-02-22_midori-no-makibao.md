# みどりのマキバオー

machineName: みどりのマキバオー
manufacturer: 平和
formalModelName: みどりのマキバオー
approvalNumber: 9S1072
releaseDate: 2010-02-22（K-Naviホール導入開始。グリーンべると当時記事は2010-02-21から納品予定）
generation: 5号機
systemType: ボーナス + 押し順ART / スイカ連続非ART当選回数による救済
coreStatus: COMPLETE_CORE_RESET_PARTIAL

## chronologyNote

- 最新mainの `recordCount 458 / chronologicalFrontier 2010-02-21`、README、ミッションv0.7、旧INDEX、LATEST_HANDOFF、直前レコード「真田純勇士」を再取得してから継続。
- repo検索で「みどりのマキバオー」が未登録であることを確認。
- 当時グリーンべるとは2010-01-20発表記事で「納品は2月21日からの予定」、K-Naviは「ホール導入開始 2010年2月22日」と記録。納品開始とホール導入開始の定義差として両方保持し、本DBのreleaseDateはホール導入日2010-02-22を採用。

## payoutRateBySetting

- 設定1: **96.9%**
- 設定2: **98.8%**
- 設定3: **102.5%**
- 設定4: **106.1%**
- 設定5: **109.6%**
- 設定6: **110.4%**

pacnkと5号機クロニクルで全設定系列一致。P-WORLDのレンジ96.9%～110.4%とも端点一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## initialHitBySetting

### BIG合算
- 設定1: **1/489.1**
- 設定2: **1/489.1**
- 設定3: **1/481.9**
- 設定4: **1/478.4**
- 設定5: **1/471.5**
- 設定6: **1/461.5**

### REG
- 設定1: **1/496.5**
- 設定2: **1/489.1**
- 設定3: **1/485.5**
- 設定4: **1/471.5**
- 設定5: **1/464.8**
- 設定6: **1/439.8**

### ART初当り
- 設定1: **1/485**
- 設定2: **1/466**
- 設定3: **1/441**
- 設定4: **1/426**
- 設定5: **1/398**
- 設定6: **1/379**

K-NaviのBIG/REG系列は丸め表示で同傾向、pacnkが精密値を掲載。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_ROUNDED_CORROBORATION

## baseGamesPer50

- **31.69G / 50枚（全設定共通）**

パチマガスロマガ旧解析の本機専用ページに「1000円あたりのゲーム数 全設定共通31.69G」と直接記載。

confidence: ANALYSIS_HIGH

## netIncrease

- ART「マスタングラッシュ」: **約+1.5枚/G**
- 1セット **30G** またはボーナス成立まで。ARTナビストックがあれば30G終了後もループ。

当時グリーンべると、P-WORLD、K-Navi、パチマガスロマガで整合。

confidence: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## basicPayout

- BIG: **約200枚**（規定払い出し312枚）
- REG: **約60枚**（規定払い出し88枚）

P-WORLD、パチマガスロマガで一致。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## modeSpecificMinimumData

- ART「マスタングラッシュ」は30G・約+1.5枚/G。
- 通常時のスイカ成立でART抽選。外れたスイカ回数が蓄積され、**通常時スイカ6回連続ART非当選後、7回目以降は猛特訓モード移行時のART当選率が大幅上昇**。
- P-WORLDは「ART非突入スイカ7回以上で猛特訓ステージ突入なら約95%でART、7回未満は約30%」と記録。
- 一般的なゲーム数到達型天井は非搭載。物差し上は「スイカ連続非ART当選回数による仮天井/救済」として扱う。

confidence: ANALYSIS_HIGH / MULTI_SOURCE_CORROBORATED

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED — SUIKA_RESCUE_COUNTER_RESET_ON_SETTING_CHANGE**。pacnk解析で「スイカ天井はART当選・ボーナス成立・設定変更でリセット」と明記。設定変更でスイカ連続非ART当選回数は消去される。K-Naviにも本機専用の「設定変更後はどうなる!?」「設定変更時のモード移行率」「設定変更後のモード移行」解析項目が現存するが、今回検索結果から具体的なモード振分値本文を確定回収できなかったため推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のスイカ救済カウンタ・内部モード/状態を直接明記した本機固有高信頼本文を今回確定できず。設定変更でリセットされることから据え置き継続を推測して埋めない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。`電源OFF ON / 電源入切 / 電断 / 復帰 / 朝一`を機種名と組み合わせ、K-Navi・旧解析・後年DBまで探索したが、単純電源OFF→ONのみを設定変更と区別する直接本文を確定できず。

gameCounterReset: **NOT_APPLICABLE_FOR_GAME_COUNT_CEILING / RESET_ON_SETTING_CHANGE_FOR_SUIKA_NON_ART_COUNTER**。ゲーム数天井は非搭載。比較上重要なスイカ連続非ART当選カウンタは設定変更でリセット。

ceilingAfterReset: **NO_GAME_COUNT_CEILING / SUIKA_RESCUE_PROGRESS_CLEARED**。設定変更専用短縮ゲーム数天井は確認なし。通常時スイカ6回連続非ART後、7回目以降の救済進捗は設定変更で消去。

modeAfterReset: **EXISTS_BUT_NUMERIC_DISTRIBUTION_UNVERIFIED_AFTER_RESEARCH**。K-Naviに設定変更時モード移行率/設定変更後モード移行の専用解析項目が存在することは確認。ただし具体振分値を取得できず、数値を推測しない。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。朝一内部状態の再抽選/引継ぎを直接確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **NONE_CONFIRMED_AS_NET_BENEFIT / MODE_RESELECTION_EXISTS_BUT_VALUES_UNVERIFIED**。設定変更専用モード移行解析の存在は確認したが、客側に有利な具体率を確定できず。少なくともスイカ救済進捗は消えるため、その進捗保持恩恵はない。

resetPenalties: **SUIKA_RESCUE_PROGRESS_LOST_ON_SETTING_CHANGE**。前日までに蓄積したスイカ連続非ART当選回数は設定変更でリセットされるため、7回目以降救済へ近い台では朝一価値が失われる。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。`ガックン / 初期出目 / 出目変化 / リール / 液晶 / ランプ / 設定変更判別 / 据え置き判別`まで検索語を変更したが、本機固有の高信頼な変更判別方法を確定できず。

numericResetData:
  gameCountCeiling: **NONE**
  suikaRescueCondition: **6 consecutive non-ART suika failures completed; 7th and later suika rescue active**
  rescueARTChanceWhenTrainingAfter7Plus: **about 95%**（P-WORLD）
  rescueARTChanceWhenTrainingBefore7: **about 30%**（P-WORLD）
  settingChangeSuikaCounter: **RESET**
  publishedResetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**（専用解析項目の存在のみ確認）
  publishedMorningHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
  publishedResetBenefitRate: **NONE_CONFIRMED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_CONFIRMED_SUIKA_COUNTER_RESET_OTHER_FIELDS_RESEARCHED

## conflicts

- release dateは実質的競合ではなく定義差: 当時業界記事 `2010-02-21納品開始予定` / K-Navi `2010-02-22ホール導入開始`。両方保持。
- K-Naviのボーナス確率は整数丸め、pacnkは精密値。定義一致の丸め差として扱う。
- 後年5号機クロニクル検索結果には別世代「届け!!日本一のゴールへ!!」の説明が混在する表示箇所があり、初代の性能値は他資料で照合できた値のみ採用。

## missingFields

- carryOverBehavior: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change mode distribution numeric table: UNVERIFIED_AFTER_RESEARCH
- setting-change internal state distribution: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH
- reset-specific morning hit rate / benefit rate: NONE_CONFIRMED_AFTER_RESEARCH

## sources

取得日: 2026-09-03

1. グリーンべると「続編が好評連載中の競馬漫画がパチスロに」 — https://web-greenbelt.jp/00002501/ — 2010-01-20発表、2010-02-21納品開始予定、ART30G・純増1.5枚/G — reliability: INDUSTRY
2. P-WORLD「みどりのマキバオー（2010年）」 — https://www.p-world.co.jp/machine/database/5830 — 平和、型式名、検定番号9S1072、機械割レンジ、BIG約200枚/REG約60枚、ART約1.5枚/G、スイカ7回以上救済約95% — reliability: INDUSTRY_DATABASE
3. K-Navi「みどりのマキバオー」 — https://p-kn.com/slot/1145/ — ホール導入開始2010-02-22、BIG/REG/合算、ART仕様、設定変更/朝一専用解析項目の存在 — reliability: ANALYSIS_HIGH
4. パチマガスロマガ「みどりのマキバオー 基本システム」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/37/a.php — BIG約200枚、REG約60枚、ART30G/ボーナスまで、純増1.5枚/G — reliability: ANALYSIS_HIGH
5. パチマガスロマガ「みどりのマキバオー 小役確率」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/37/c.php — 1000円あたり全設定共通31.69G — reliability: ANALYSIS_HIGH
6. パチマガスロマガ「みどりのマキバオー 機種索引」 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwa_slot/37/heiwa_slot_37.php — 「攻め時・ヤメ時・設定変更時」等の当時解析項目存在確認 — reliability: ANALYSIS_HIGH
7. pacnk「みどりのマキバオー 設定判別ツール」 — https://pacnk.com/slot/tools/sh_makibao.html — 設定別PAYOUT、BIG/REG、ART初当り、ゲーム数天井非搭載、スイカ救済カウンタはART当選・ボーナス成立・設定変更でリセット — reliability: ANALYSIS_SECONDARY
8. 5号機クロニクル「平和＆オリンピア」 — https://5goki.com/heiwa-olympia — 初代の設定別機械割系列照合に使用。別世代説明混在箇所は不採用 — reliability: RETROSPECTIVE_DATABASE
