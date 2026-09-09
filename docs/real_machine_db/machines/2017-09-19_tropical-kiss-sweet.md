machineName: トロピカルKISS スウィートVer.
manufacturer: ハイライツ・エンタテインメント / P-WORLD表記: アイゲート
releaseDate: 2017-09-19
recordNumber: 1152
generation: 5号機（5.5号機世代）
systemType: A+SRT / リアルボーナス+低純増ART系SRT
formalModelName: UNVERIFIED_AFTER_RESEARCH
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_IDENTITY

## identity
- 2017-07-25の業界発表資料ではハイライツ・エンタテインメントの新機種「トロピカルKISS」として、ビターVer. / スウィートVer.の2スペック同時展開を確認。
- PiDEA XもスウィートVer. / ビターVer.の2タイプ同時販売と明記し、スウィート固有のボーナス獲得枚数を掲載。
- ちょんぼりすた、K-Navi、必勝本はメーカーをハイライツ・エンタテインメントと表記。一方、P-WORLD機種DBはメーカー欄を **アイゲート** とする。製造/ブランド表記差の可能性はあるが法的関係を一次資料で固定できず、`CONFLICT_MANUFACTURER_LABEL_HIGHLIGHTS_VS_IGATE` として保持する。
- 導入日はちょんぼりすた、K-Navi、必勝本で **2017-09-19** が一致。2017-07-25/26の業界発表「9月中旬導入予定」と整合する。
- 正式型式名と検定番号は、「トロピカルKISS / トロピカルキス」「スウィート / Sweet」「ハイライツ / アイゲート」「型式 / 検定 / 検定番号 / 7S / 公安委員会 / 検定通過」を組み合わせ、業界記事・機種DB・検定系検索を横断したが直接固定できず **UNVERIFIED_AFTER_RESEARCH**。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_FOR_RELEASE / CONFLICT_FOR_MANUFACTURER_LABEL / UNVERIFIED_FOR_FORMAL_MODEL_AND_CERTIFICATION

## payoutRateBySetting
- 設定1: **98.1%**
- 設定2: **99.3%**
- 設定3: **100.7%**
- 設定4: **105.0%**
- 設定5: **108.2%**
- 設定6: **111.0%**
- ちょんぼりすた、パチ＆スロ必勝本、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting
### SUPER BIG BONUS
- 設定1: **1/993.0**
- 設定2: **1/923.0**
- 設定3: **1/819.2**
- 設定4: **1/648.9**
- 設定5: **1/555.4**
- 設定6: **1/481.9**

### BIG BONUS
- 設定1: **1/392.4**
- 設定2: **1/383.3**
- 設定3: **1/383.3**
- 設定4: **1/366.1**
- 設定5: **1/358.1**
- 設定6: **1/354.2**

### ALOHA BONUS / REG相当
- 設定1: **1/372.4**
- 設定2: **1/372.4**
- 設定3: **1/372.4**
- 設定4: **1/360.1**
- 設定5: **1/348.6**
- 設定6: **1/344.9**

### ボーナス合算
- 設定1: **1/160.2**
- 設定2: **1/156.8**
- 設定3: **1/153.5**
- 設定4: **1/141.9**
- 設定5: **1/134.0**
- 設定6: **1/128.3**
- ちょんぼりすたとパチ＆スロ必勝本で主要値が一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
- **約32G/50枚**。
- ちょんぼりすた、すろぱちくえすとで一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- SRT「トロピカルTIME」: **約0.3枚/G**。
- 2017-07-25/26業界発表、ちょんぼりすた、P-WORLD、K-Navi等で一致。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout
- SUPER BIG BONUS: **252枚**。
- BIG BONUS: **153枚**。
- ALOHA BONUS: **54枚**。
- SRT「トロピカルTIME」: **50 / 100 / 150 / 200 / 300 / 500G または無限**。
- SBB252枚 / BIG153枚 / ALOHA54枚はPiDEA X、K-Navi、P-WORLD、すろぱちくえすとで一致。
- 一方、楽スロの単一ページにSBB **280枚**表記があるため、平均せず `CONFLICT_SBB_PAYOUT_252_VS_280_LOW_CONFIDENCE_SECONDARY` として保持。canonicalは業界一次+複数解析一致の252枚。
reliability: INDUSTRY_AND_ANALYSIS_HIGH_MULTI_SOURCE / LOW_CONFIDENCE_CONFLICT_SECONDARY_FOR_280

## modeSpecificMinimumData
- 通常時は **通常 / 高確 / 超高確** の内部状態を持つ。
- 高確以上のボーナス当選はSRT突入/ゲーム数に影響し、超高確中ボーナスは強いSRT契機となる。
- 通常天井は **ボーナス&SRT間777G**。到達でSRT当選。
- 天井到達時SRTゲーム数は公開解析上 **50G 91% / 100G 5% / 150G 2% / 200G 1% / 300G 1%**。
reliability: ANALYSIS_HIGH

## resetBehavior
schemaVersion: v0.7
resetQaStatus: SETTING_CHANGE_AND_PURE_POWER_CYCLE_DIRECT_COMPARISON_CONFIRMED; DISTINCT_STAY_SETTING_AND_DETECTION_PARTIAL
resetQaLastUpdated: 2026-09-10

### settingChangeBehavior
- 設定変更時は **天井リセット / 内部状態リセット**。
- 朝一ステージは **アロハ艦内ステージ**。
- 設定変更専用の天井短縮は確認できず、通常天井777Gへ向けてカウンタを再スタートする扱い。
reliability: ANALYSIS_HIGH_DIRECT_RESET_TABLE

### carryOverBehavior
- 「据え置き」を独立条件として明示した本機固有比較資料は、表記揺れ・設定据え置き/変更なし/朝一/電源OFF ON等で再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
- 純電源OFF→ONでは天井・状態・ステージ引継ぎが直接比較表で確認されているが、据え置きと自動同定しない。
reliability: UNVERIFIED_FOR_DISTINCT_STAY_SETTING_CONTRACT / ANALYSIS_HIGH_FOR_POWER_CYCLE

### powerCycleBehavior
- 純電源OFF→ON時: **天井引継ぎ / 状態引継ぎ / ステージ引継ぎ**。
- ちょんぼりすたのスウィートver朝一リセット恩恵表で設定変更時と直接比較されている。
reliability: ANALYSIS_HIGH_DIRECT_COMPARISON

### gameCounterReset
- settingChange: **RESET**。
- purePowerCycle: **CARRYOVER**。
- staySetting: **UNVERIFIED_AFTER_RESEARCH_AS_DISTINCT_CONDITION**。
reliability: ANALYSIS_HIGH_FOR_SETTING_CHANGE_AND_POWER_CYCLE

### ceilingAfterReset
- normalCeiling: **777G（ボーナス&SRT間）**。
- settingChangeCeiling: **777G**。
- reset-specific shortening: **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH

### modeAfterReset
- 設定変更時は内部状態を **RESET**。
- 通常/高確/超高確の具体的な朝一振り分け率は、機種名・メーカー・設定変更/リセット/朝一/モード/状態振り分けを変えて再探索しても固定できず **UNVERIFIED_AFTER_RESEARCH**。
- 純電源OFF→ON時は状態引継ぎ。
reliability: ANALYSIS_HIGH_FOR_RESET_VS_CARRYOVER / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### stateAfterReset
- settingChange: **RESET**。
- purePowerCycle: **CARRYOVER**。
- 具体的初期状態振り分け: **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_DIRECTION / UNVERIFIED_FOR_NUMERIC_DISTRIBUTION

### advantageousSectionReset
- **NOT_APPLICABLE_5TH_GEN_PRE_5_9**。

### resetBenefits
- 設定変更専用の天井短縮、初当たり優遇、SRTゲーム数優遇の公開契約は **NONE_CONFIRMED_AFTER_RESEARCH**。
- 状態はリセットされ、朝一ステージはアロハ艦内へ戻る。
reliability: NONE_CONFIRMED_FOR_NUMERIC_RESET_BENEFIT / ANALYSIS_HIGH_FOR_STAGE_AND_STATE_RESET

### resetPenalties
- 前日の高確/超高確状態は設定変更で失われる。
- 前日天井進捗は設定変更で失われる。
- その他の設定変更専用不利要素は **NONE_CONFIRMED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STATE_AND_COUNTER_RESET

### resetDetection
- 設定変更時はアロハ艦内ステージ開始、純電源OFF→ON時はステージ引継ぎのため、前日最終ステージを把握できる場合は変更推測材料になり得る。
- 本機固有のガックン発生率、初期出目、ランプによる確定変更判別は、「ガックン / 朝一 / 設定変更判別 / 初期出目 / ランプ」を機種名・メーカー表記と組み合わせ再探索したが **UNVERIFIED_AFTER_RESEARCH**。
reliability: ANALYSIS_HIGH_FOR_STAGE_DIFFERENCE / UNVERIFIED_FOR_HARDWARE_DETECTION

### numericResetData
- normalCeiling: **777G**
- settingChangeCeiling: **777G**
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
- `CONFLICT_MANUFACTURER_LABEL_HIGHLIGHTS_VS_IGATE`: 業界発表/ちょんぼりすた/K-Navi/必勝本はハイライツ・エンタテインメント、P-WORLDはアイゲート表記。平均・強制統合せず双方を保持。
- `CONFLICT_SBB_PAYOUT_252_VS_280_LOW_CONFIDENCE_SECONDARY`: PiDEA X、K-Navi、P-WORLD、すろぱちくえすとは252枚で一致。楽スロ単一ページのみ280枚表記。canonicalは高信頼複数一致の252枚だが、差異自体は消さない。

## sources
取得日: 2026-09-10
- 遊技日本（2017-07-25プレス発表会）: https://yugi-nippon.com/pachinko-news/post-14018/
- PiDEA X（2017-07-26、2スペック・SRT仕様）: https://www.pidea.jp/articles/%E4%BA%BA%E6%B0%97%E3%82%B2%E3%83%BC%E3%83%A0%E3%80%8C%E3%83%88%E3%83%AD%E3%83%94%E3%82%AB%E3%83%ABKISS%E3%80%8D%E6%96%B0%E6%84%9FSRT%E6%90%AD%E8%BC%89%EF%BC%8F%E3%83%8F%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%84
- パチビー（2017-07-25発表会）: https://www.pachibee.jp/pparticles/view/983
- ちょんぼりすた: https://chonborista.com/slot/high-enter/45615/
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/3043/1/66069
- K-Navi スウィートVer.: https://p-kn.com/slot/2868/
- P-WORLD スウィートVer.: https://www.p-world.co.jp/machine/database/8473
- すろぱちくえすと: https://www.slopachi-quest.com/article/tropicalkiss-sweet/
- 楽スロ（SBB280枚の低信頼競合）: https://rakuslo.com/torokisssweet-bonus.html

## researchNotes
- 欠損再探索では「トロピカルKISS / トロピカルキス」「スウィート / Sweet」「ハイライツ / アイゲート」「型式 / 検定 / 検定番号 / 7S / 公安委員会 / 検定通過」「設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井引継ぎ / ガックン / 状態 / モード」を組み合わせ、業界記事、P-WORLD、K-Navi、必勝本、当時解析、検定系検索を横断。
- 性能コア、通常天井777G、設定変更vs純電断の主要契約は複数資料/直接比較表で固定できた。
- 正式型式/検定番号、据え置き独立契約、朝一状態振り分け、確定的なガックン等は十分な再探索後も直接固定できなかったためUNVERIFIED。
- ビターVer.とはボーナス確率・獲得枚数・天井が明確に異なるため、全機種/別スペック方針に従い独立レコード化した。
