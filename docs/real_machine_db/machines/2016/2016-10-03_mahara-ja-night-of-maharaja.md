machineName: マハラJA / ナイトオブマハラジャ ～神秘なる秘宝～
manufacturer: デンケン販売
releaseDate: 2016-10-03（全国導入予定本線） / 2016-09一部先行導入確認
recordNumber: 1020
generation: 5号機 / 5.5号機期
systemType: ノーマルA+RT / ボーナス主体 / 1500G完走型RT
formalModelName: マハラ JA
certificationNumber: UNVERIFIED_AFTER_RESEARCH
recordStatus: COMPLETE_PUBLIC_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_AFTER_RESEARCH

## identity
- グリーンべると当時記事でデンケン販売の新機種『パチスロ マハラJA』として2016-08-15発表を確認。
- パチスロ解析ガイドは2016-10-03導入開始表記。2016-09時点の当時記事では全国的には10/3導入開始予定とされる一方、9/15には実機遊技報告があり、5号機クロニクル系資料でも2016年9月機として整理されているため、一部先行導入を別記する。
- 本DBでは全国導入本線の2016-10-03をcanonical releaseDateとし、2016-09の先行導入実績を `EARLY_INSTALLATION_2016_09_CONFIRMED` として保持。平均化や日付一本化で消さない。
- 型式名 `マハラ JA` は後年機種資料および当時検定通過言及で確認。
- 検定番号は「マハラ JA」「マハラJA」「ナイトオブマハラジャ」「デンケン販売」「検定」「6S」等で再探索したが直接固定できず UNVERIFIED_AFTER_RESEARCH。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE_WITH_RELEASE_BOUNDARY_NOTE

## payoutRateBySetting
公開確認できた設定のみ:
| 設定 | 機械割 |
|---:|---:|
| 1 | 97.5% |
| 6 | 107.3% |
- 当時資料では設定1・6のみ公表と明記。設定2〜5は `NOT_PUBLICLY_DISCLOSED_IN_FOUND_CONTEMPORARY_SOURCES`。
- P-WORLDは設定6側を107.5%レンジとして掲載するため、107.3%と107.5%は平均せずCONFLICT保持。複数の当時/解析資料一致の107.3%をcanonicalとする。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE_CONFLICT_SETTING6

## initialHitBySetting
公開確認できたボーナス合算:
| 設定 | ボーナス合算 |
|---:|---:|
| 1 | 1/141 |
| 6 | 1/97 |
- グリーンべるとはレンジを1/141〜1/97.5、P-WORLDも同様のレンジ表記。一方、ちょんぼりすた等の設定表は設定6=1/97。
- `CONFLICT_SETTING6_BONUS_COMBINED_1_97_VS_1_97_5` として保持し、複数の設定表で一致する1/97をcanonicalとする。
- 設定2〜5、BIG/大ステルス/小ステルス個別設定別確率は公開確認できず `NOT_PUBLICLY_DISCLOSED_IN_FOUND_CONTEMPORARY_SOURCES`。
reliability: INDUSTRY_ANALYSIS_MULTI_SOURCE_WITH_CONFLICT

## baseGamesPer50
- 約35G/50枚。
reliability: ANALYSIS_MULTI_SOURCE

## netIncrease
- 1500G完走型RT「ナマステモード」はP-WORLDでコイン現状維持型と説明。
- 比較可能な数値純増/Gは検索語を変えて再探索しても固定できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: PUBLIC_DESCRIPTION_ONLY_NUMERIC_UNVERIFIED

## basicPayout
- BIGボーナス: 約220枚。
- 大ステルスボーナス: 約100枚。
- 小ステルスボーナス: 約40枚。
- グリーンべると、P-WORLD、ちょんぼりすたで一致。
reliability: INDUSTRY_ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 小ステルスボーナスの一部から1500G完走型RT「ナマステモード」へ突入。
- RT中にボーナスが成立・消化されても1500G消化までRTは継続する仕様。
- P-WORLDではRT滞在を常時ランプ告知せず、特定演出で滞在確定となることを確認。
- 通常時の詳細なボーナス内部抽選・全演出契機は物差し用途を超えるため収集しない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: PARTIAL_PUBLIC_MACRO_BEHAVIOR_AFTER_EXHAUSTIVE_RESEARCH
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 「マハラJA / マハラ JA / ナイトオブマハラジャ / デンケン販売」と「設定変更 / リセット / 朝一 / RT / ナマステモード / ガックン」を組み替え、当時記事・解析・古いDBを再探索。
- 設定変更時に1500G RT残ゲーム数がRESETされるかCARRYOVERされるかを直接示す本機固有資料は固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更専用の朝一モード、短縮天井、CZ優遇等は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 一般的なA+RT機挙動から推測補完しない。

### carryOverBehavior
- 据え置き時の1500G RT残ゲーム数/内部RT状態の扱いを直接示す資料は `UNVERIFIED_AFTER_RESEARCH`。
- 通常ゲーム数天井の宵越し価値は、天井そのものを確認できていないため推測しない。

### powerCycleBehavior
- 純電源OFF→ON時の1500G RT残ゲーム数/内部RT状態、告知表示状態の扱いは `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更との違いを示す本機固有公開資料は十分な再探索後も固定できなかった。

### gameCounterReset
- 通常ゲーム数天井の存在を確定できる資料はなし。パチスロ解析ガイドは天井を「調査中」としており、非搭載と断定しない。
- よって設定変更/据え置き/純電断時の天井ゲーム数契約は `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset
- 設定変更専用短縮天井・朝一天井数値: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 通常天井の存在自体は `UNVERIFIED_AFTER_RESEARCH`。

### modeAfterReset
- 設定変更専用通常モード/朝一モード: `NONE_CONFIRMED_AFTER_RESEARCH`。
- 1500G RT「ナマステモード」のリセット時保持契約は `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 主要な長期状態は1500G完走型RT。
- 設定変更・据え置き・純電源OFF→ONそれぞれのRT状態保持/消去は本機固有直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- NOT_APPLICABLE_5TH_GEN_PRE_5_9。

### resetBenefits
- 朝一専用RT突入率、短縮天井、高確移行等: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更により前日RT残ゲーム数を失うかは `UNVERIFIED_AFTER_RESEARCH`。
- その他の設定変更固有不利: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有の設定変更ガックン、初期出目、表示等による変更確定契約は、表記揺れ・型式名・メーカー名を含めて再探索後も `NONE_CONFIRMED_AFTER_RESEARCH`。
- RT滞在告知演出はRT状態の示唆/確定であり、設定変更判別そのものではないため混同しない。

### numericResetData
- 公開確認できた設定変更/朝一専用の比較可能数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- 本機は流通規模が小さく、全国導入予定日と実際の先行設置時期が分かれる。全国導入本線2016-10-03と2016-09先行設置を別属性で保持する。
- 設定2〜5の機械割/合算は、当時記事が設定1・6のみ公表と明記するため、単なる検索不足ではなく公開範囲制限として扱う。
- RT1500Gは複数資料一致で性能コアとして高信頼。ただし設定変更/電断時のRT残G保持契約は確認できず、一般論による推測を排除。

## conflicts
- `CONFLICT_SETTING6_BONUS_COMBINED_1_97_VS_1_97_5`: 設定表系資料1/97に対しグリーンべると/P-WORLDのレンジ上限1/97.5。平均せず保持。
- `CONFLICT_SETTING6_PAYOUT_107_3_VS_107_5`: ちょんぼりすた等107.3%に対しP-WORLDレンジ上限107.5%。複数一致の107.3%をcanonicalとする。
- 導入時期は数値競合というより `EARLY_INSTALLATION_2016_09_CONFIRMED` と `NATIONAL_ROLLOUT_PLANNED_2016_10_03` の流通段階差として分離。

## missingFields
- certificationNumber: UNVERIFIED_AFTER_RESEARCH
- 設定2〜5の公表機械割/ボーナス合算: NOT_PUBLICLY_DISCLOSED_IN_FOUND_CONTEMPORARY_SOURCES
- 数値RT純増/G: UNVERIFIED_AFTER_RESEARCH
- 通常天井の有無: UNVERIFIED_AFTER_RESEARCH
- 設定変更/据え置き/純電断時の1500G RT残G・状態契約: UNVERIFIED_AFTER_RESEARCH
- 本機固有の設定変更判別契約: NONE_CONFIRMED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. グリーンべると — デンケン販売から6年ぶりの新機種（2016-08-15）
   - https://web-greenbelt.jp/00008868/
2. P-WORLD — マハラJA（5号機RT、220/100/40枚、1500G RT、合算・機械割レンジ）
   - https://www.p-world.co.jp/machine/database/8149
3. ちょんぼりすた — ナイトオブマハラジャ（設定1/6スペック、35G/50枚、1500G RT）
   - https://chonborista.com/slot/denken/24365/
4. P-Summa — ナイトオブマハラジャ / デンケン販売（当時、設定1/6のみ機械割公表の記述）
   - https://psumma.jp/pachislo/26345/
5. パチスロ解析ガイド — ナイトオブマハラジャ（2016-10-03～導入表記、天井調査中）
   - https://pachislot-guide.net/2016/night-of-maharaja/
6. パチ7自由帳 — ナイトオブマハラジャ実戦（2016-09-15時点の実機遊技実績）
   - https://pachiseven.jp/columns/column_detail/7625
7. いたちゃんの痛パチ・痛スロ日記 — ナイトオブマハラジャ（マハラJA）（全国10/3導入予定と先行設置言及）
   - https://ameblo.jp/itasan666/entry-12199875140.html
8. pachinko’s blog — 型式名「マハラ JA」、2016年10月リリース
   - https://pachinko.hatenablog.jp/entry/2016/10/night-of-maharaja
9. ぱちんこドキュメント!! — 当時検定情報で「マハラJA」として通過していた旨、1500G RT・約220枚
   - https://pachinkolist.com/archives/49240553.html
