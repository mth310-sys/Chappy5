# アベノ橋魔法☆商店街

machineName: アベノ橋魔法☆商店街
manufacturer: ビスティ
formalModelName: アベノ橋魔法商店街Ａ
formalModelNameStatus: CONFLICT_OFFICIAL_A_VS_HAZUSE_S
formalModelNameAlternative: アベノ橋魔法商店街S
approvalNumber: 0S0449
approvalNumberStatus: HAZUSE_DATABASE_CONFIRMED
releaseDate: 2010-08-23
releaseDateStatus: CONFLICT_EXACT_DATE / OFFICIAL_MONTH_CONFIRMED
releaseDateNote: SANKYO公式・フィールズ資料は2010年8月導入を確認。HAZUSEは2010-08-16、当時解析ブログは最速ホール導入日2010-08-23、パチビーは2010-08-24と掲載するため、exact dateはCONFLICT。時系列本線の主値は「最速ホール導入日」として明示された2010-08-23を採用し、8/16・8/24説を消さず保持する。
generation: 5号機
systemType: A+ART / 30G ART / CZ / 無限ART「陰陽師モード」
coreStatus: COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_RELEASE_DATE_AND_CEILING_COUNT_CONFLICT_BASE_UNVERIFIED

## chronologyNote

- 最新mainのREADME、正本ミッションv0.7、INDEX、LATEST_HANDOFF、前線503「ワイルドキャッツ」を再取得。
- 開始時正本地点は recordCount 503 / chronologicalFrontier 2010-08-23。
- 2010-08-23同日群と8/24境界を再監査し、「アベノ橋魔法☆商店街」が未登録であることをrepo検索で確認。
- exact release dateには2010-08-16 / 2010-08-23 / 2010-08-24の資料差がある。公式メーカー・フィールズ資料は2010年8月までしか日を確定しないため、日付差をCONFLICTとして保存。
- 今回は8/23前線境界の遡及追加扱いとし、chronologicalFrontierは2010-08-23のまま維持する。

## payoutRateBySetting

- 設定1: **97.2%**
- 設定2: **99.1%**
- 設定3: **101.2%**
- 設定4: **104.9%**
- 設定5: **109.5%**
- 設定6: **115.1%**

パチビー、K-Navi、P-WORLD系資料で一致を確認。
confidence: ANALYSIS_MULTI_SOURCE_HIGH

## initialHitBySetting

### BIG
- 設定1: **1/402.1**
- 設定2: **1/390.1**
- 設定3: **1/385.5**
- 設定4: **1/374.5**
- 設定5: **1/364.1**
- 設定6: **1/348.6**

### REG / ときめきBONUS
- 設定1: **1/434.0**
- 設定2: **1/425.6**
- 設定3: **1/407.1**
- 設定4: **1/392.4**
- 設定5: **1/372.4**
- 設定6: **1/358.1**

### PC / ペンタグラムチャレンジ
- 全設定: **1/4096.0**

### ボーナス合算
- 設定1: **1/198.6**
- 設定2: **1/193.9**
- 設定3: **1/188.9**
- 設定4: **1/183.1**
- 設定5: **1/176.2**
- 設定6: **1/169.3**

HAZUSE・P-WORLD・パチビー系で主要系列を照合。後年/当時単一ブログに設定2 REG **1/453**表記があり、複数一致する1/425.6と競合するため平均せずconflictsに保持。
confidence: ANALYSIS_MULTI_SOURCE_HIGH_WITH_SINGLE_SOURCE_CONFLICT

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**

「アベノ橋魔法☆商店街 / アベノ橋魔法商店街A/S / ビスティ」に「50枚」「1000円」「ベース」「コイン持ち」「千円回転」を組み合わせ、P-WORLD、HAZUSE、パチビー、K-Navi、当時解析/回顧系を横断したが、比較可能な本機固有の直接値を高信頼に確定できなかった。小役確率からの逆算は行わない。
confidence: UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## netIncrease

- ART: **1セット30G**
- ART純増: **約+1.2枚/G**
- 無限ART「陰陽師モード」: 次回ボーナスまで継続

P-WORLD、パチビー、当時業界/解析資料で30G・約+1.2枚/Gを照合。
confidence: INDUSTRY_PLUS_ANALYSIS_HIGH

## basicPayout

- BIG: **約252枚**
- REG / ときめきBONUS: **約63枚**
- PC / ペンタグラムチャレンジ: **約14枚**

confidence: ANALYSIS_MULTI_SOURCE_HIGH

## modeSpecificMinimumData

- ボーナスとARTを組み合わせたA+ART機。
- 通常時のARTは基本30G、純増約+1.2枚/G。
- 通常状態**1000G**到達で天井ARTへ入り、次回ボーナスまで継続する仕様をHAZUSEで確認。
- 別系統のボーナス後ART非突入回数型天井が存在する。HAZUSEは規定回数を**2〜5回**、パチビーは**ボーナス6連続ART非突入**と記載するため数値定義が競合。平均化せず双方を保持。
- この回数型天井と1000G天井は別カウンタとして扱う。

confidence: ANALYSIS_HIGH_WITH_CEILING_COUNT_CONFLICT

## resetBehavior — v0.7

settingChangeBehavior: **PARTIAL_CONFIRMED**。HAZUSEで、設定変更しても通常状態1000G天井までのゲーム数はクリアされない一方、ボーナス後ART非突入回数型天井の進捗はクリアされることを確認。CZ/ART/内部RT状態、ART残G・権利、その他内部状態の設定変更時処理は本機固有の直接資料を確定できず推測しない。

carryOverBehavior: **UNVERIFIED_AFTER_RESEARCH**。据え置き時のCZ/ART/内部状態、ART残G・権利、ボーナス後ART非突入回数型カウンタの保持を一括して直接説明する本機固有資料を確定できず。1000Gカウンタについては設定変更でも保持すること自体は別項目で直接確認済みだが、一般的な据え置き挙動へ拡張推論しない。

powerCycleBehavior: **UNVERIFIED_AFTER_RESEARCH**。単純電源OFF→ON時の1000Gカウンタ、回数型天井カウンタ、CZ/ART/内部状態、初期出目・液晶状態を本機固有に直接確定できず。

gameCounterReset: **PARTIAL_SPLIT_CONFIRMED**。設定変更時、通常1000G天井ゲーム数は**引継ぎ**。一方、ボーナス後ART非突入回数型天井の進捗は**クリア**。

ceilingAfterReset: **NO_SHORTENING_CONFIRMED_FOR_1000G_COUNTER / SECOND_COUNTER_CLEARED**。1000G天井がリセット専用に短縮されるのではなく、既存のゲーム数進捗を設定変更後も保持する。回数型天井は設定変更で進捗クリア。

modeAfterReset: **UNVERIFIED_AFTER_RESEARCH**。設定変更専用モード振り分け、朝一専用モードを示す直接資料を確定できず。

stateAfterReset: **UNVERIFIED_AFTER_RESEARCH**。CZ/ART/内部RT/高確等の設定変更時初期化・再抽選を本機固有資料で確定できず。

advantageousSectionReset: **NOT_APPLICABLE**（5号機・有利区間制度前）

resetBenefits: **1000G_CEILING_PROGRESS_RETAINED_ON_SETTING_CHANGE**。設定変更後も1000G天井ゲーム数進捗が残るため、前日ハマリが設定変更されても朝一の天井到達距離に影響し得る。これはHAZUSEの直接記述に基づく。

resetPenalties: **ART_NON_ENTRY_COUNT_CLEARED_ON_SETTING_CHANGE**。ボーナス後ART非突入回数型天井の進捗は設定変更でクリアされるため、そのカウンタについては前日進捗を失う。回数天井そのものの規定値は資料間CONFLICTを維持。

resetDetection: **UNVERIFIED_AFTER_RESEARCH**。機種名表記揺れ・型式名・メーカー名に「設定変更」「リセット」「朝一」「据え置き」「電源OFF ON」「ガックン」「初期出目」「ランプ」「液晶」を組み合わせ、HAZUSE、P-WORLD、パチビー、K-Navi、当時解析/回顧資料を横断したが、本機固有の変更判別法を確定できず。

numericResetData:
- normalGameNumberCeiling: **1000G**
- settingChangeNormalGameCounter: **RETAIN**
- artNonEntryCountCeiling: **CONFLICT — HAZUSE 2〜5回 / パチビー 6連続**
- settingChangeArtNonEntryCount: **CLEAR**（HAZUSE）
- resetCeilingShortening: **NONE_CONFIRMED; 1000G progress retained instead**
- resetDedicatedARTInitialHitRate: **NONE_CONFIRMED_AFTER_RESEARCH**
- resetModeDistribution: **UNVERIFIED_AFTER_RESEARCH**
- resetStateDistribution: **UNVERIFIED_AFTER_RESEARCH**

resetBehaviorQA: PARTIAL_CONFIRMED_COUNTER_BEHAVIOR_OTHER_FIELDS_UNVERIFIED_AFTER_MULTI_SOURCE_RESEARCH

## conflicts

- releaseDate: SANKYO公式/フィールズは2010年8月。exact dateはHAZUSE **2010-08-16**、当時解析ブログ **2010-08-23（最速ホール導入日）**、パチビー **2010-08-24**。平均化せず全根拠を保持。
- formalModelName: SANKYO公式オンラインミュージアムは **アベノ橋魔法商店街Ａ**、HAZUSEは **アベノ橋魔法商店街S**。別スペックの裏付けを確定できないため型式名差としてCONFLICT保持。
- ART非突入回数型天井: HAZUSE **2〜5回の規定回数**、パチビー **6連続ART非突入**。平均せず保持。
- REG設定2: HAZUSE/P-WORLD系 **1/425.6**に対し、単一当時解析ブログ **1/453**。主値は複数一致する1/425.6、競合値は削除しない。

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- carryOverBehavior detailed: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- setting-change mode/state distributions: UNVERIFIED_AFTER_RESEARCH
- resetDetection: UNVERIFIED_AFTER_RESEARCH

## sources

取得日: 2026-09-04

1. SANKYO公式オンラインミュージアム「アベノ橋魔法☆商店街」 — https://www.sankyo-fever.jp/collection/872/ — ビスティ、導入2010.08、販売名/型式名「アベノ橋魔法商店街Ａ」。
2. HAZUSE「アベノ橋魔法☆商店街」 — https://hazuse.com/machine/pachislot/0S0449/ — 導入開始2010-08-16、型式「アベノ橋魔法商店街S」、検定0S0449、設定別確率、1000G天井、設定変更時の1000Gカウンタ引継ぎ・回数型天井カウンタクリア。
3. パチビー「アベノ橋魔法☆商店街」 — https://www.pachibee.jp/machines/index/210060008 — 導入2010-08-24、設定別機械割/確率、BIG約252枚、REG約63枚、PC約14枚、ART30G・約1.2枚/G、ボーナス6連続ART非突入天井表記。
4. P-WORLD「アベノ橋魔法☆商店街」 — https://www.p-world.co.jp/machine/database/6047 — ビスティ、A+ART機としての基本仕様・設定別性能照合。
5. K-Navi「アベノ橋魔法☆商店街」 — https://p-kn.com/slot/1255/ — 設定別機械割・ART性能等の照合。
6. P-Mans / 当時業界紹介 2010年7月 — https://p-mans.blogspot.com/2010/07/ — ART30G・純増約1.2枚/G、無限ART等の当時仕様確認。
7. フィールズ2010年資料 — https://www.tsuburaya-fields.co.jp/ir/j/files/press/2010/press_20101104a.pdf — 2010年8月発売機としての時期確認。
8. 当時解析ブログ — https://slotkaiseki777.blog102.fc2.com/blog-entry-936.html — 最速ホール導入日2010-08-23、設定別性能の補助確認。REG設定2は他資料とCONFLICT。
9. P-WORLD掲示板 — https://www.p-world.co.jp/sp/search_kisyubbs.cgi?code=&group_id=3511&mode=thread_list&page=1 — 2010-08-24〜25時点の実導入・実戦書き込みを時期補助として参照。

## QA note

- 性能コアとresetBehavior QAを分離し、直接確認できた設定変更時カウンタ挙動のみ確定扱い。
- `UNVERIFIED_AFTER_RESEARCH`は、表記揺れ・型式・メーカー・朝一/リセット/据え置き/電源/ガックン等へ検索語を変え、複数資料系統を横断した後に限定して使用。
- 回数型天井の競合値は平均化・補間しない。
