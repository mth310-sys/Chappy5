machineName: トロピカルKISS ビターVer.
manufacturer: ハイライツ・エンタテインメント / P-WORLD表記: アイゲート
releaseDate: 2017-09-19
recordNumber: 1151
generation: 5号機（5.5号機世代）
systemType: A+SRT / リアルボーナス+低純増ART系SRT
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_IDENTITY

## identity
- 2017-07-25の業界発表資料ではハイライツ・エンタテインメントの新機種「トロピカルKISS」として、ビターVer. / スウィートVer.の2スペック同時展開を確認。
- ちょんぼりすた、K-Naviはメーカーをハイライツ・エンタテインメントと表記。一方、P-WORLD機種DBはメーカー欄を **アイゲート** とするため、製造/ブランド表記差の可能性があるが一次資料で関係を固定できず、メーカー表記差を `CONFLICT_MANUFACTURER_LABEL_HIGHLIGHTS_VS_IGATE` として保持する。
- 導入日はちょんぼりすた、K-Navi、P-WORLD系で **2017-09-19** が一致。2017-07-25当時業界発表は「9月中旬導入予定」で整合する。
- 正式型式名と検定番号は、機種名表記揺れ、ビター/ビターVer、ハイライツ/アイゲート、検定/型式/7S、公的告示系を変えて再探索したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_FOR_RELEASE / CONFLICT_FOR_MANUFACTURER_LABEL / UNVERIFIED_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
- 設定1: **97.8%**
- 設定2: **98.7%**
- 設定3: **100.6%**
- 設定4: **104.5%**
- 設定5: **107.6%**
- 設定6: **112.6%**
- ちょんぼりすたとP-WORLDで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### SUPER BIG BONUS
- 設定1: **1/689.9**
- 設定2: **1/668.7**
- 設定3: **1/624.2**
- 設定4: **1/560.1**
- 設定5: **1/512.0**
- 設定6: **1/461.5**

### BIG BONUS
- 設定1: **1/936.2**
- 設定2: **1/910.2**
- 設定3: **1/885.6**
- 設定4: **1/819.2**
- 設定5: **1/771.0**
- 設定6: **1/753.3**

### ALOHA BONUS / REG相当
- 設定1: **1/1236.5**
- 設定2: **1/1191.6**
- 設定3: **1/1129.9**
- 設定4: **1/1057.0**
- 設定5: **1/1057.0**
- 設定6: **1/1040.3**

### ボーナス合算
- 設定1: **1/300.6**
- 設定2: **1/291.3**
- 設定3: **1/276.5**
- 設定4: **1/253.0**
- 設定5: **1/238.3**
- 設定6: **1/224.4**
- 上記はちょんぼりすたとP-WORLDで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
- ちょんぼりすたの機種スペック欄で明示。
reliability: ANALYSIS_HIGH

## netIncrease
- SRT「トロピカルTIME」: **約0.3枚/G**。
- 2017-07-25業界発表、ちょんぼりすた、P-WORLDで一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- SUPER BIG BONUS: **300枚**。
- BIG BONUS: **207枚**。
- ALOHA BONUS: **108枚**。
- SRT「トロピカルTIME」: **50 / 100 / 150 / 200 / 300 / 500G または無限**。
- P-WORLD、K-Navi、ちょんぼりすたで主要獲得性能が一致。
reliability: DATABASE_AND_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時は **通常 / 高確 / 超高確** の内部状態を持つ。
- 高確以上でのボーナス当選はSRT当選に強く影響し、超高確中は無限SRT獲得契機となる。
- 通常天井は **ボーナス&SRT間999G**。到達でSRT当選。
- 天井到達時のSRTゲーム数は公開解析上、**100G 91% / 150G 5% / 200G 2% / 300G 1% / 500G 1%**。
reliability: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: SETTING_CHANGE_AND_PURE_POWER_CYCLE_DIRECT_COMPARISON_CONFIRMED; DISTINCT_STAY_SETTING_AND_DETECTION_PARTIAL
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **天井リセット / 内部状態リセット**。
- 朝一ステージは **アロハ館内ステージ**。
- 設定変更専用の天井短縮は確認できず、通常天井999Gを再スタートする契約として扱う。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 「据え置き」と独立明示した本機固有比較表は再探索後も固定できず **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- ただし純電源OFF→ONでは天井・状態・ステージ引継ぎが直接表で確認されているため、実運用上の据え置き朝一と整合するが、同一概念として自動同定しない。
reliability: UNVERIFIED_FOR_DISTINCT_STAY_SETTING_CONTRACT / ANALYSIS_HIGH_FOR_POWER_CYCLE

### powerCycleBehavior
- 純電源OFF→ON時: **天井引継ぎ / 状態引継ぎ / ステージ引継ぎ**。
- ちょんぼりすたの朝一リセット恩恵表で直接比較されている。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET**。
- purePowerCycle: **CARRYOVER**。
- staySetting: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- normalCeiling: **999G（ボーナス&SRT間）**。
- settingChangeCeiling: **999G**。
- reset-specific shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は内部状態を **RESET**。
- 通常/高確/超高確の具体的な朝一振り分け率は、検索語・資料系統変更後も固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時は状態引継ぎ。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- settingChange: **RESET**。
- purePowerCycle: **CARRYOVER**。
- 具体的初期状態振り分けは **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_DIRECTION / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、初当たり優遇、SRTゲーム数優遇の公開契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 状態はリセットされ、朝一ステージがアロハ館内に戻る。
reliability: NONE_CONFIRMED_FOR_NUMERIC_RESET_BENEFIT / ANALYSIS_HIGH_FOR_STAGE_AND_STATE_RESET

### resetPenalties
- 前日の高確/超高確状態は設定変更で失われる。
- 前日天井進捗は設定変更で失われる。
- それ以外の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STATE_AND_COUNTER_RESET

### resetDetection
- 設定変更時はアロハ館内ステージ開始、純電源OFF→ONはステージ引継ぎのため、前日最終ステージを把握できる状況では変更推測材料になり得る。
- 本機固有のガックン発生率、初期出目、ランプによる確定変更判別は、機種名/型式/メーカー表記と「ガックン」「朝一」「変更判別」「初期出目」「ランプ」を組み合わせ再探索したが **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STAGE_DIFFERENCE / UNVERIFIED_FOR_HARDWARE_DETECTION

### numericResetData
- normalCeiling: **999G**
- settingChangeCeiling: **999G**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetSrtBenefitRate: **UNVERIFIED_AFTER_RESEARCH**
- gakkunProbability: **UNVERIFIED_AFTER_RESEARCH**

## missingFields
- formalModelName: **UNVERIFIED_AFTER_RESEARCH**
- certificationNumber: **UNVERIFIED_AFTER_RESEARCH**
- exact manufacturer legal-entity relationship behind Highlights vs iGate labels: **UNVERIFIED_AFTER_RESEARCH**
- distinct stay-setting carry-over contract: **UNVERIFIED_AFTER_RESEARCH**
- numeric reset-state distribution: **UNVERIFIED_AFTER_RESEARCH**
- deterministic gakkun / initial-reel / lamp contract: **UNVERIFIED_AFTER_RESEARCH**

## conflicts
- `CONFLICT_MANUFACTURER_LABEL_HIGHLIGHTS_VS_IGATE`: ちょんぼりすた/K-Navi/2017業界発表はハイライツ・エンタテインメント、P-WORLDはアイゲート表記。平均・統合せず双方を保持。

## sources
取得日: 2026-09-10
- 遊技日本（2017-07-25プレス発表会）: https://yugi-nippon.com/pachinko-news/post-14018/
- PiDEA X（2017-07-26、2スペック・SRT仕様）: https://www.pidea.jp/articles/%E4%BA%BA%E6%B0%97%E3%82%B2%E3%83%BC%E3%83%A0%E3%80%8C%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%ABKISS%E3%80%8D%E6%96%B0%E6%84%9F%E8%A6%9ASRT%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%84
- パチビー（2017-07-25発表会）: https://www.pachibee.jp/pparticles/view/983
- ちょんぼりすた: https://chonborista.com/slot/high-enter/45615/
- K-Navi ビターVer.: https://p-kn.com/slot/2869/
- P-WORLD ビターVer.: https://www.p-world.co.jp/machine/database/8472

## researchNotes
- 欠損再探索では「トロピカルKISS / トロピカルキス」「ビター / ビターVer」「ハイライツ / アイゲート」「型式 / 検定番号 / 7S / 公安委員会」「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井引継ぎ / ガックン」を組み合わせ、業界記事、P-WORLD、K-Navi、当時解析、検定系検索を横断。
- 性能コアと設定変更vs純電断の主要契約は複数資料で固定できたが、正式型式/検定番号、据え置き独立契約、ガックン等は十分な再探索後も直接固定できなかったためUNVERIFIED。
- スウィートVer.はSBB/BIG/REG確率、獲得枚数、天井777GなどビターVer.と明確に独立性能であり、次レコードNo.1152候補として継続する。
