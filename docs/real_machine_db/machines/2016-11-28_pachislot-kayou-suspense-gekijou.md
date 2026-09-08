machineName: パチスロ火曜サスペンス劇場
manufacturer: タイヨーエレック
releaseDate: 2016-11-28
recordNumber: 1026
generation: 5号機 / 5.5号機期
systemType: ノーマル+A+RT / BIG後32G RT
formalModelName: パチスロ火曜サスペンス劇場／ZZ
certificationNumber: 6S0296
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7_PARTIAL_PUBLIC_RESET_DATA

## identity
- PiDEAの2016-09-28発表会記事で、タイヨーエレックがパチスロ版「火曜サスペンス劇場」を発表したことを確認。
- パチビー、当時解析、ALL7でホール導入日2016-11-28が一致するためcanonicalは2016-11-28。
- P-WORLD機種DBでメーカー「タイヨーエレック」、正式型式「パチスロ火曜サスペンス劇場／ZZ」、検定番号「6S0296」を確認。
reliability: INDUSTRY_PLUS_ANALYSIS_HIGH_MULTI_SOURCE

## payoutRateBySetting
本機は設定1 / 2 / 5 / 6の4段階設定。

| 設定 | 機械割 |
|---:|---:|
| 1 | 97.6% |
| 2 | 100.6% |
| 5 | 105.0% |
| 6 | 110.0% |

- スロパチクエストの設定別解析値をcanonicalとし、別系統の設定別一覧でも97.6〜110.0%レンジを確認。
- 一方、後年新台カレンダー系資料に設定6=110.3%表記があるため、110.0% vs 110.3%は平均せずCONFLICTとして保持。
reliability: ANALYSIS_HIGH_MULTI_SOURCE_WITH_CONFLICT_ON_SETTING6

## initialHitBySetting
| 設定 | BIG | MIDDLE BONUS | ボーナス合算 |
|---:|---:|---:|---:|
| 1 | 1/309.1 | 1/376.6 | 1/169.8 |
| 2 | 1/303.4 | 1/350.5 | 1/162.6 |
| 5 | 1/282.5 | 1/300.6 | 1/145.6 |
| 6 | 1/264.3 | 1/265.3 | 1/132.4 |

- P-WORLD、当時解析、2016年当時のスペック転載記事で同系列を照合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50
| 設定 | 50枚あたりゲーム数 |
|---:|---:|
| 1 | 33.63G |
| 2 | 34.24G |
| 5 | 34.47G |
| 6 | 35.62G |

- 当時解析の「33.6G〜35.6G/50枚」および当時スペック記事の「約34G/50枚」と整合。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## netIncrease
- BIG後32GのRTを搭載。
- RTの比較可能な純増枚数/Gは、「火曜サスペンス劇場」「火サス」「ZZ」「RT純増」「32G」「設定変更」等へ検索語・資料系統を変えて再探索したが、今回直接固定できる数値を取得できず `UNVERIFIED_AFTER_RESEARCH`。
reliability: UNVERIFIED_ON_RT_NET_INCREASE_ONLY

## basicPayout
- BIG BONUS: 約312枚。
- MIDDLE BONUS: 104枚。
- BIG BONUS終了後は32GのRTへ突入。
- P-WORLD、当時解析、2016年スペック記事で一致。
reliability: ANALYSIS_HIGH_MULTI_SOURCE

## modeSpecificMinimumData
- 通常時はボーナス主体のノーマル+A+RT。CZ / ART / ATは非搭載。
- BIG終了後のみ32G RTへ突入する。
- 通常時ゲーム数天井は `NOT_APPLICABLE_NO_CEILING`。天井搭載を示す資料は確認できない。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESEARCH_WITH_UNVERIFIED_TEMPORARY_RT_RESET_CONTRACT
resetQaLastUpdated: 2026-09-08

### settingChangeBehavior
- 本機固有の「設定変更時にBIG後RT状態をどう扱うか」を直接示す公開資料は、機種名/略称/型式名/検定番号に「設定変更」「リセット」「朝一」「RT状態」を組み合わせ、当時解析・古いDB・中古実機資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 天井・長期モード・CZ/ARTは非搭載のため、それらの設定変更リセット契約はN/A。

### carryOverBehavior
- 据え置き時の通常ゲーム数天井/長期モード引継ぎは `NOT_APPLICABLE_NO_CEILING_OR_LONG_TERM_MODE`。
- BIG後32G RT途中を跨いだ場合の本機固有の内部RT状態の据え置き契約は、直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時の本機固有RT状態の引継ぎ/初期化を直接比較した資料は、検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- 一般的な5号機RT機の挙動から推測して補完しない。

### gameCounterReset
- `NOT_APPLICABLE_NO_GAME_COUNT_CEILING`。

### ceilingAfterReset
- `NOT_APPLICABLE_NO_CEILING`。
- 設定変更専用の短縮天井もN/A。

### modeAfterReset
- 朝一専用モード、天国/通常等の長期モードは `NONE_CONFIRMED_AFTER_RESEARCH`。
- BIG後32G RTは一時的RT状態として別扱いし、設定変更時契約は上記のとおりUNVERIFIED。

### stateAfterReset
- 長期的な通常/高確/CZ状態は `NOT_APPLICABLE_OR_NONE_CONFIRMED`。
- 一時的RT状態の設定変更/据え置き/電断契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- `NOT_APPLICABLE_5TH_GEN_PRE_5_9`。

### resetBenefits
- 設定変更専用の短縮天井、朝一高確、CZ/ART優遇、特定G以内当選率等は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 設定変更固有の公開された不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 本機固有のガックン、初期出目、ランプ、液晶ステージ等を用いた設定変更/据え置き判別は、機種名・型式名・「ガックン」「設定変更判別」「朝一」「据え置き」を変えて再探索しても直接資料を固定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- ボーナス終了画面等の設定示唆は「現在設定の推測」であり、設定変更/据え置き判別とは目的が異なるためresetDetectionへ混入させない。

### numericResetData
- 設定変更時専用のモード振り分け、短縮天井、朝一当選率、恩恵発生率等の公開数値: `NONE_CONFIRMED_AFTER_RESEARCH`。

## dataQualityNotes
- 本機は設定1/2/5/6の4段階設定なので、設定3/4を補間しない。
- ボーナス確率・獲得枚数・ベースは複数系統資料で高整合。
- 機械割設定6のみ110.0%と110.3%の資料差を確認したため平均せずCONFLICT保持。canonicalは詳細設定別解析と複数一覧に合う110.0%。
- resetBehaviorは天井や長期モードがない部分をN/Aとし、BIG後RTの設定変更/電断契約は一般論から推定せずUNVERIFIEDとした。

## conflicts
- payoutRate setting6: **110.0% vs 110.3%**。canonical 110.0%、110.3%は後年カレンダー系二次資料値として保持。

## missingFields
- RT net increase per game: UNVERIFIED_AFTER_RESEARCH
- setting-change behavior of temporary BIG-after RT state: UNVERIFIED_AFTER_RESEARCH
- power-cycle behavior of temporary BIG-after RT state: UNVERIFIED_AFTER_RESEARCH

## sources
取得日: 2026-09-08

1. PiDEA — タイヨーエレック「火サス」パチ・スロ同時発表
   - https://www.pidea.jp/articles/%E3%82%BF%E3%82%A4%E3%83%A8%E3%83%BC%E3%82%A8%E3%83%AC%E3%83%83%E3%82%AF%E3%80%8C%E7%81%AB%E3%82%B5%E3%82%B9%E3%80%8D%E3%83%91%E3%83%81%E3%83%BB%E3%82%B9%E3%83%AD%E5%90%8C%E6%99%82%E7%99%BA%E8%A1%A8
2. パチビー — パチスロ火曜サスペンス劇場
   - https://www.pachibee.jp/movies/index/13108
3. P-WORLD — パチスロ火曜サスペンス劇場
   - https://www.p-world.co.jp/machine/database/8182
4. スロパチクエスト — 火曜サスペンス劇場 設定判別・設定差・機械割・ベース
   - https://www.slopachi-quest.com/article/kasasu-settei/
5. スロット解析情報~すろかい~ — パチスロ 火曜サスペンス劇場 解析情報
   - https://slotkaiseki.hatenablog.com/entry/kasasu
6. ぱちんこドキュメント!! — 2016-09-16 スペック転載（five-net.jp由来）
   - https://pachinkolist.com/archives/49553807.html
7. 5号機クロニクル — タイヨーエレック機種一覧
   - https://5goki.com/yaiyoelec
8. ALL7 — 2016年11月導入予定一覧
   - https://www.all7.jp/plans/index/2016/11
9. HAZUSE — パチンコ・パチスロ新台カレンダー
   - https://hazuse.com/new-machine-calendar/newmachine-calendar/
