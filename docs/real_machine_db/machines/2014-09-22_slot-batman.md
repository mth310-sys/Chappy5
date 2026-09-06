# スロット バットマン

machineName: スロット バットマン
manufacturer: エレコ
releaseDate: 2014-09-22
releaseDatePrecision: exact_hall_start
generation: 5号機
systemType: ART / CZ / 擬似ボーナス
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_SOURCE_LIMITS_AND_METADATA_CONFLICT

## identity

- ユニバーサルエンターテインメント公式製品ページで **エレコ / 5号機 / ART / 2014年9月発売**を確認。
- K-Naviでホール導入開始 **2014-09-22** を確認。パチ＆スロ必勝本も **2014/09/22導入**。
- 東京都公安委員会検定通過状況（遊技通信、2014-08-12）で型式 **SLOTバットマンBL**、回胴式、**エレコ**を確認。
- P-WORLDもメーカーを **エレコ** と掲載。一方、K-Navi機種ページはメーカー欄を **メーシー** とするため、メーカー表記は `CONFLICT_METADATA_MANUFACTURER_KNAVI_MACY_VS_OFFICIAL_ELECO` として保持し、公式・検定公示・P-WORLDの一致を優先して canonical manufacturer はエレコとする。
- 数字形式の検定番号（4Sxxxx等）は、`SLOTバットマンBL / スロットバットマン / エレコ / メーシー / 検定 / 型式 / 4S` を組み替え、公式・業界公示・実機DB・中古実機資料まで再探索したが安全に固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: OFFICIAL_PLUS_INDUSTRY_PLUS_ANALYSIS_HIGH_WITH_METADATA_CONFLICT

## payoutRateBySetting

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.1% |
| 3 | 101.3% |
| 4 | 106.0% |
| 5 | 110.8% |
| 6 | 115.7% |

- パチ＆スロ必勝本とCranky Sevenで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### ART「ダークナイトラッシュ」初当たり

| 設定 | ART初当たり |
|---:|---:|
| 1 | 1/264.0 |
| 2 | 1/254.5 |
| 3 | 1/240.8 |
| 4 | 1/213.5 |
| 5 | 1/193.9 |
| 6 | 1/168.1 |

- パチ＆スロ必勝本とCranky Sevenで一致。
- 通常時の擬似BIGは全設定共通 **1/8683.3** とする解析値あり。ART中BIGは設定1〜6で **1/391.9 / 390.7 / 389.5 / 388.4 / 386.9 / 384.9**。物差しの主要初当たりはART初当たりを採用。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **約30G/50枚**。
- Cranky Sevenの「1000円あたりの回転数 約30G」を採用。20円スロットの1000円=50枚基準の比較値として保持。
- `50枚 / 1000円 / 千円 / ベース / コイン持ち`、機種名・型式・メーカー表記を変えて再探索した上で取得。
- confidence: ANALYSIS_SINGLE

## netIncrease

- ART「ダークナイトラッシュ」: **約2.3枚/G**。
- ユニバーサル公式はART機であること、P-WORLD・K-Navi・パチ＆スロ必勝本・Cranky Sevenが約2.3枚/Gを確認。
- confidence: OFFICIAL_SYSTEM_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## basicPayout

- ART「ダークナイトラッシュ」: **1セット50G+α / 約2.3枚/G**。
- 擬似BIG: **30G固定 / 約2.3枚/G**。
- CZ「ブラックゲートチャレンジ」: **15G+α / ART期待度50%以上**。
- 上位CZ「スーパーブラックゲートチャレンジ」: **15G+α / ART期待度90%以上**。
- 実獲得枚数を理論純増×G数から機械的に作らず、公開されているG数・純増をそのまま保存。
- confidence: OFFICIAL_PLUS_PWORLD_PLUS_ANALYSIS_HIGH

## modeSpecificMinimumData

- ART間天井: **999G**消化で、前兆を経由しART確定の無限CZへ。
- CZ間天井: 最大 **600G** でCZ。
- CZ規定Gを管理するモードは6種類。
- モード別CZ間最大G数:
  - 通常A: **600G**
  - 通常B: **300G**
  - 天国A: **89G**
  - 天国B: **39G**
  - 逆境A: **39G**
  - 逆境B: **39G**
- 有利区間制度導入前。

## resetBehavior

schemaVersion: v0.7
resetQaStatus: COMPLETE_WITH_SOURCE_LIMITS
resetQaLastUpdated: 2026-09-07

### settingChangeBehavior

- 設定変更時は **天井到達までのゲーム数がクリア**される。
- 朝一解析で **CZ抽選モードを再抽選**。
- ART間999G天井およびCZ規定G進捗を設定変更前からそのまま引き継ぐ扱いにはしない。
- 高確/低確等、CZモード以外の内部状態が設定変更時にどの状態へ移るかを直接示す完全対照表は今回固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE_FOR_COUNTER_RESET_AND_MODE_REROLL

### carryOverBehavior

- 朝一解析では、**前日+当日でCZ間600Gを超えると変更確定（特殊ケース除外）**、逆に**宵越し600G付近/300G付近でCZ発動なら据え置き濃厚**とされ、据え置き時のCZ規定Gカウンタ引継ぎを強く支持。
- ART間999Gの宵越しについては当時実戦・ユーザー記録に支持例があるが、メーカー直接契約ではないため `PERIOD_OBSERVATIONAL_SUPPORT` に留める。
- モードそのものの据え置き時完全保持、内部高確状態などの完全保持契約は直接表を固定できず `UNVERIFIED_AFTER_RESEARCH`。
- confidence: ANALYSIS_HIGH_FOR_CZ_COUNTER_CARRYOVER / PERIOD_OBSERVATIONAL_SUPPORT_FOR_ART_COUNTER

### powerCycleBehavior

- **設定変更なしの単純な電源OFF→ONのみ**について、ART間G、CZ間G、CZモード、内部状態の直接対照表を、`電源OFF ON / 電断 / 電源入切 / 据え置き / 朝一 / リセット / ガックン` と表記揺れ・型式を組み替えて公式・当時解析・古いDB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き朝一の観測結果を、純電源OFF→ON契約へ自動拡張しない。

### gameCounterReset

- 設定変更時: **RESET**。
- 据え置き時CZ間カウンタ: **CARRYOVER_SUPPORTED_BY_ANALYSIS**。
- 据え置き時ART間カウンタ: **CARRYOVER_PERIOD_OBSERVATIONAL_SUPPORT**。
- 単純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。

### ceilingAfterReset

- ART間天井は通常 **999G**。設定変更後だけの固定短縮ART天井は今回確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ただしCZモードは設定変更時に再抽選され、選択モードによりCZ間最大 **39 / 89 / 300 / 600G** となる。
- 「リセットで必ず○G天井」とは扱わない。

### modeAfterReset

- **CZ抽選モード再抽選**。
- 設定1の朝一リセット後モード振り分け:
  - 通常A: **62.98%**
  - 通常B: **24.41%**
  - 天国A: **9.16%**
  - 天国B: **3.05%**
  - 逆境A: **0.31%**
  - 逆境B: **0.09%**
- 解析注記: 奇数設定は通常A・天国、偶数設定は通常Bへ移行しやすく、高設定ほど天国以上の期待度が上昇。
- 天国以上合算は **設定1 約12% → 設定6 約28%** と公開。
- 朝一客行動に必要な公開リセット数値だけを保存し、全設定の通常時モード移行テーブルなど完全再現用抽選は収集しない。
- confidence: ANALYSIS_HIGH

### stateAfterReset

- CZモード再抽選は確認済み。
- 高確/低確等の別内部状態について、設定変更時の開始状態・振り分けを直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset

- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits

- 設定変更後も天国A/B・逆境A/Bへの振り分けがあり、選択時は **39Gまたは89G以内がCZ規定G上限**となる。
- 天国以上合算は設定1約12%、設定6約28%。
- ただし朝一実戦集計では大きな狙い目ゾーンは確認されず、低設定域の朝一を一律に強い恩恵とは扱わない。

### resetPenalties

- 固定的なリセット不利仕様は `NONE_CONFIRMED_AFTER_RESEARCH`。
- 朝一実戦集計では通常時比較で引き戻しが弱め、目立つゾーンなしとする解析考察があるが、これは実戦集計に基づく評価であり内部仕様の確定ペナルティとは分離する。

### resetDetection

- 前日G数を把握できる条件で、**前日+当日のCZ間が600G超**なら設定変更を強く示す/確定扱いとする解析（ペナルティ等特殊ケースを除外）。
- **宵越し600G付近または300G付近でCZ発動**は据え置き濃厚の推測材料。
- 本機固有のガックン、初期出目、初期ステージだけで変更を固定できる直接資料は、`ガックン / リール / 初期出目 / 朝一ステージ / SLOTバットマンBL` を再探索しても `NONE_CONFIRMED_AFTER_RESEARCH`。

### numericResetData

- 設定1朝一モード: **通常A 62.98 / 通常B 24.41 / 天国A 9.16 / 天国B 3.05 / 逆境A 0.31 / 逆境B 0.09%**。
- 天国以上合算: **設定1 約12% → 設定6 約28%**。
- モード別CZ上限: **600 / 300 / 89 / 39 / 39 / 39G**。
- 設定変更後固定ART短縮天井: `NONE_CONFIRMED_AFTER_RESEARCH`。

### publicMorningNumbers

- 上記設定1モード振り分けおよび天国以上約12〜28%を公開朝一数値として保存。
- 新台初日・朝一実戦集計では「大きく目立つゾーンなし」とする観測があるが、図表から安全に復元できる設定別当選率の数値列は今回採用しない。

## resetBehavior 再探索メモ

- 表記揺れ: `スロット バットマン / スロットバットマン / SLOTバットマン / SLOTバットマンBL / バットマン / エレコ / メーシー`。
- 検索語: `設定変更 / リセット / 朝一 / 据え置き / 宵越し / 電源OFF ON / 電断 / 天井 / 天井短縮 / CZ間 / ART間 / モード / モード振り分け / ガックン / 初期出目 / 50枚 / 1000円 / ベース / コイン持ち / 型式 / 検定`。
- ユニバーサル公式、東京都公安委員会検定公示を扱う業界記事、P-WORLD、K-Navi、パチ＆スロ必勝本、パチマガスロマガ、Cranky Seven、当時解析/実戦、後年実機資料を横断。

## conflicts

- `CONFLICT_METADATA_MANUFACTURER_KNAVI_MACY_VS_OFFICIAL_ELECO`:
  - ユニバーサル公式: **エレコ**。
  - 東京都公安委員会検定通過状況: **SLOTバットマンBL / エレコ**。
  - P-WORLD: **エレコ**。
  - K-Navi: **メーシー**。
  - canonicalは高信頼3系統が一致する **エレコ**。K-Navi表記も削除せず競合メタデータとして保持。
- 性能コアの主要数値（ART初当たり、機械割、純増、ART基本G数）には今回重大な競合なし。

## missingFields

- 数字形式の検定番号: `UNVERIFIED_AFTER_RESEARCH`。
- 設定変更なし単純電源OFF→ONの各内部情報: `UNVERIFIED_AFTER_RESEARCH`。
- CZモード以外の設定変更時内部状態開始契約: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き時のモード/内部状態完全保持契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン/初期出目/初期ステージの確定判別: `NONE_CONFIRMED_AFTER_RESEARCH`。

## sources

取得日: 2026-09-07

- Universal Entertainment 公式 — スロット バットマン: https://www.universal-777.com/product/slot/slot_batman/
  - manufacturer / generation / system / release month
  - confidence: OFFICIAL
- Universal Entertainment 2014製品一覧: https://www.universal-777.com/product/slot/2014/
  - release month
  - confidence: OFFICIAL
- 遊技通信 — 東京都公安委員会検定通過状況（8月11日）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%888%E6%9C%8811%E6%97%A5%EF%BC%89/
  - model `SLOTバットマンBL` / エレコ
  - confidence: INDUSTRY_PUBLIC_NOTICE_REPRINT
- グリーンべると — 己の運でゲーム数をつかむ「上乗セレクト」採用: https://web-greenbelt.jp/00007109/
  - 2014-08-01 industry announcement / Eleco brand
  - confidence: INDUSTRY
- K-Navi: https://p-kn.com/slot/2110/
  - exact hall start 2014-09-22 / system / manufacturer-label conflict
  - confidence: ANALYSIS_HIGH_FOR_DATE / CONFLICT_FOR_MANUFACTURER_LABEL
- P-WORLD: https://www.p-world.co.jp/machine/database/7487
  - manufacturer Eleco / 5号機 / ART 50G+α / pseudo BIG 30G / 2.3枚/G
  - confidence: ANALYSIS_HIGH
- パチ＆スロ必勝本 — 基本スペック: https://p.hisshobon.jp/machine/list.php?c=1&d=48254&mid=2447&p=2
  - 2014/09/22 / ART初当たり / BIG / 機械割 / 2.3枚/G / 50G+α
  - confidence: ANALYSIS_HIGH
- パチマガスロマガ — BIG BONUS: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/95/06.php
  - pseudo BIG 30G
  - confidence: ANALYSIS_HIGH
- Cranky Seven: https://crankyseven.com/batman-pc.htm
  - base 約30G/1000円 / ART初当たり / payout / ceiling / setting-change counter clear
  - confidence: ANALYSIS_HIGH_FOR_CORE / ANALYSIS_SINGLE_FOR_BASE
- 期待値見える化 — 朝一リセット: https://slotjin.com/slot/batman-reset/
  - reset counter / mode reroll / setting1 mode distribution / heaven+ range / carryover detection
  - confidence: ANALYSIS_HIGH
- 肉汁スロッター回顧: https://www.nikuziru.com/archives/956
  - CZ600G / ART999G / retrospective cross-check
  - confidence: ANALYSIS_SINGLE_RETROSPECTIVE
- 愛品館 — 実機資料: https://www.aihin.co.jp/new/news-1030955/
  - Eleco / SLOTバットマンBL / 5号機 / 50G+α / 2.3枚/G
  - confidence: SECONDARY_IDENTITY_SUPPORT
