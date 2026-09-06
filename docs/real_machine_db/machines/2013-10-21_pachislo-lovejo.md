# パチスロ ラブ嬢

machineName: パチスロ ラブ嬢
aliases: パチスロラブ嬢 / ラブ嬢
manufacturer: オリンピア / OLYMPIA
releaseDate: 2013-10-21
releaseDatePrecision: exact_day
modelName: パチスロラブ嬢A1
inspectionNumber: 3S0656

generation: 5号機
systemType: AT / CZ / 枚数管理 / ゲーム数・ポイント管理
recordStatus: COMPLETE_CORE_WITH_RESET_BEHAVIOR_RESEARCHED_BASE_UNVERIFIED

## identity

- HAZUSEで5号機、メーカー「オリンピア」、型式「パチスロラブ嬢A1」、検定番号「3S0656」、導入開始日2013-10-21を確認。
- K-Naviもホール導入開始2013-10-21を掲載。
- グリーンべると当時記事は納品開始2013-10-20予定とし、ホール導入日とは定義を分離して保持。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE / INDUSTRY_SUPPORTING

## payoutRateBySetting

| 設定 | 機械割 |
|---|---:|
| 1 | 97.7% |
| 2 | 98.8% |
| 3 | 100.4% |
| 4 | 104.3% |
| 5 | 109.4% |
| 6 | 113.6% |

- HAZUSE / K-Naviで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## initialHitBySetting

### AT「LOVE RUSH」初当たり

| 設定 | AT初当たり |
|---|---:|
| 1 | 1/259.7 |
| 2 | 1/250.8 |
| 3 | 1/240.5 |
| 4 | 1/215.0 |
| 5 | 1/187.2 |
| 6 | 1/164.9 |

- HAZUSE / K-Naviで一致。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## baseGamesPer50

- **UNVERIFIED_AFTER_RESEARCH**。
- 「パチスロラブ嬢 / ラブ嬢 / パチスロラブ嬢A1 / オリンピア」と「50枚 / 1000円 / ベース / コイン持ち」を組み替えて検索し、初代2013年機と安全に対応付けられる比較可能値を今回固定できなかった。
- ラブ嬢II / IIプラス / ラブ嬢3の50枚ベースは別機種なので転記しない。
- confidence: UNVERIFIED

## netIncrease

- AT「LOVE RUSH」: **純増約2.7枚/G**。
- 2013年のグリーンべると、娯楽産業、K-Navi、パチマガスロマガで一致。
- confidence: INDUSTRY_HIGH_MULTI_SOURCE

## basicPayout

- AT「LOVE RUSH」は**差枚数管理型**。
- AT開始時の「OPENING ATTACK」は**5Gまたは10G**継続し、毎ゲーム上乗せで初期枚数を決定する。
- 当時業界記事では1Gあたり20〜500枚の上乗せ、AT純増約2.7枚/G。
- VIP BONUSは30Gの疑似ボーナスとする当時解析あり。
- 固定1セット枚数ではなく、初期差枚数決定型として物差しへ保持する。
- confidence: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData

- 通常時は**通常A / 通常B / 通常C / 天国A / 天国B**の5モード。
- 通常A: 250G 1.56%、500G 1.56%、750G 96.88%。
- 通常B: 250G 12.50%、500G 12.50%、750G 75.00%。
- 通常C: 250G 25.00%、500G 75.00%。
- 天国A/B: 100G 100%。
- 通常時の全モード移行テーブルは実機完全再現用なので収集対象外。
- confidence: ANALYSIS_HIGH

## ceiling

- 通常時最大天井は**750G + 最大16G前兆**でAT当選。
- モード別最大天井は通常A/B 750G、通常C 500G、天国A/B 100G。
- confidence: ANALYSIS_HIGH_MULTI_SOURCE

## resetBehavior

schemaVersion: v0.7
resetQaStatus: RESEARCHED__RESET_CONTRACT_PARTIALLY_CONFIRMED_WITH_PUBLIC_NUMERIC_RESET_DATA
resetQaLastUpdated: 2026-09-06

### settingChangeBehavior

- 設定変更時は**天井までのゲーム数をリセット**する当時攻略資料を確認。
- **キャバクラポイントもリセット**される当時解析あり。
- 設定変更時は通常C / 天国A / 天国Bを含む専用モード移行率が公開されており、少なくとも通常C以上側へ大きく寄る。
- 当時攻略資料では「設定変更時は天井500G以内のモードが選ばれる」と整理されている。
- 内部状態は**通常以上スタート**とする当時解析あり。HAZUSEにも設定変更時の内部状態移行抽選が掲載されている。

### carryOverBehavior

- 据え置き時は**キャバクラポイントを内部的に引き継ぐ**とする当時攻略資料を確認。
- 据え置き時の天井ゲーム数について、一般的な宵越し前提記事はあるが、今回の探索で本機固有の直接契約を複数ソース固定できなかったため **UNVERIFIED_AFTER_RESEARCH**。
- モード・内部状態の完全保持契約も **UNVERIFIED_AFTER_RESEARCH**。

### powerCycleBehavior

- 設定変更を伴わない**電源OFF→ONのみ**の天井ゲーム数、キャバクラポイント、モード、内部状態の挙動は、初代2013年機に限定した直接資料を今回固定できず **UNVERIFIED_AFTER_RESEARCH**。
- ラブ嬢2以降の有利区間ランプ・電断仕様は転記しない。

### gameCounterReset

- setting change: **RESET_CONFIRMED**。
- carry-over: **UNVERIFIED_AFTER_RESEARCH**。
- power OFF→ON only: **UNVERIFIED_AFTER_RESEARCH**。

### ceilingAfterReset

- 設定変更後は**500G以内**のモードが選ばれるとする当時解析を確認。
- 通常時最大750Gに対して明確な朝一短縮恩恵。
- 通常Cでは250G 25.00% / 500G 75.00%、天国A/Bでは100G 100%。
- confidence: ANALYSIS_HIGH + CONTEMPORARY_SUPPORTING

### modeAfterReset

- HAZUSEは設定変更時の内部モード移行率を公開。
- 現存ページで安全に読み取れる値:
  - 設定1: 通常C 87.50% / 天国A 1.56% / 天国B 1.56%。
  - 設定4: 通常C 81.25% / 天国A 15.63% / 天国B 3.13%。
  - 設定5: 通常C 78.13% / 天国A 18.75% / 天国B 3.13%。
  - 設定6: 通常C 75.00% / 天国A 21.88% / 天国B 3.13%。
- 設定2・3は現存抽出表示でセルが省略されており、行結合の意味を推測して数値補完しない。
- 表示値の合計が100%にならない設定行についても、欠落列を逆算補完しない。

### stateAfterReset

- 当時攻略資料で**内部状態は通常以上スタート**を確認。
- HAZUSEにも設定変更時専用の内部状態移行抽選あり。
- 現存抽出から設定1の「通常へ86.72% / 高確へ12.50%」までは確認できるが、残余と全設定表を安全に復元できないため、完全数値テーブルは `PARTIAL_PUBLIC_TABLE` として扱う。

### advantageousSectionReset

- **NOT_APPLICABLE_5TH_GEN**。

### resetBenefits

- 天井が通常最大750Gから**設定変更後最大500G以内**へ短縮。
- 内部状態が**通常以上**から開始。
- 設定変更時モードに天国A/B振り分けが存在する。

### resetPenalties

- 前日の天井進捗とキャバクラポイントが設定変更でリセットされるため、据え置き時に蓄積していた進捗を失う側面がある。
- ただし据え置き天井G契約自体は今回 `UNVERIFIED_AFTER_RESEARCH` のため、天井宵越し価値を断定しすぎない。

### resetDetection

- 当時攻略資料は**据え置き時のみキャバクラポイントを内部引継ぎ**とし、朝一に液晶表示10000pt未満の段階でキャバクラチャンスが発動すれば据え置き推測材料になると説明。
- 逆に朝一10000ptまで発動しない場合を変更推測材料としている。
- 本機固有のガックン・初期出目・ランプによる確定的判別は **NONE_CONFIRMED_AFTER_RESEARCH**。

### publicMorningNumbers

- reset ceiling: **最大500G以内**。
- 通常C天井振り分け: **250G 25.00% / 500G 75.00%**。
- 天国A/B: **100G 100%**。
- setting-change mode distribution: 上記 `modeAfterReset` の公開確認値を保持。
- setting-change state: **通常以上スタート**。完全設定別テーブルは `PARTIAL_PUBLIC_TABLE`。
- carry-over point detection: キャバクラポイント**10000pt**到達前のCZ発動が据え置き推測材料。

## conflicts / safeguards

- 設定変更後「最大500G」とする当時解析が複数残る一方、2013-12-15の回顧記事には「リセットしても解析を無視して750Gハマるという噂」の追記がある。一次的な確定反証資料ではないため本線を覆さず、**CONFLICT_RUMOR_RESET_500_VS_REPORTED_750_HAMARI** として保持。
- HAZUSEの設定変更時モード表は現存検索抽出で設定2・3のセルが空欄表示となる。行結合を推測せず、明示表示された設定1/4/5/6のみ数値化。
- ラブ嬢2 / ラブ嬢IIプラス / スマスロラブ嬢3は別規格・別型式。電源OFF→ON、有利区間、50枚ベース、リセット数値を初代へ転記しない。

## sources

取得日: **2026-09-06**

1. HAZUSE DATA「パチスロ ラブ嬢」
   - https://hazuse.com/machine/pachislot/3S0656/
   - 型式パチスロラブ嬢A1 / 検定3S0656 / 2013-10-21導入 / AT初当たり / 機械割 / 天井 / モード別天井 / 設定変更時モード移行 / 内部状態。
   - confidence: ANALYSIS_HIGH_DATABASE

2. K-Navi「パチスロラブ嬢」
   - https://p-kn.com/slot/1940/
   - 2013-10-21導入 / AT初当たり / 機械割 / 純増2.7枚/G / ゲーム構造。
   - confidence: ANALYSIS_HIGH

3. P-WORLD / グリーンべると「パチスロでも極上のキャバクラ体験！」（2013-09-13）
   - https://news.p-world.co.jp/articles/6066/greenbelt
   - オリンピア製 / 納品開始2013-10-20予定 / LOVE RUSH純増2.7枚/G / 枚数管理型 / OPENING ATTACK。
   - confidence: INDUSTRY_CONTEMPORARY

4. 娯楽産業「オリンピア/平和『パチスロラブ嬢』発表」（2013-09-11）
   - https://www.goraku-sangyo.com/オリンピア-平和　「パチスロラブ嬢」発表/
   - 純増2.7枚/G / 枚数管理 / OPENING ATTACK 5Gor10G / 上乗せ性能。
   - confidence: INDUSTRY_CONTEMPORARY

5. パチマガスロマガ「パチスロラブ嬢」
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/111/a.php
   - 2013年10月機 / AT純増2.7枚/G / VIP BONUS等の基本構造。
   - confidence: ANALYSIS_HIGH_ARCHIVE

6. すろぱちくえすと「ラブ嬢 設定変更恩恵挙動解析 リセット後は天井500G」（2013-10-21）
   - https://www.slopachi-quest.com/article/378170397-html/
   - 設定変更時500G以内 / 内部状態通常以上 / 天井G・キャバポイントリセット / 据え置き時ポイント引継ぎ / 朝一ポイント判別。
   - confidence: ANALYSIS_CONTEMPORARY_SINGLE

7. すろぱちくえすと「パチスロラブ嬢 天井狙い目恩恵」（2013-10-21）
   - https://www.slopachi-quest.com/article/378049390-html/
   - 通常天井750G+前兆 / 設定変更で天井Gリセット。
   - confidence: ANALYSIS_CONTEMPORARY_SINGLE

8. メタボ教授「パチスロラブ嬢は設定変更後でも500が天井にならない報告が」（2013-12-15）
   - https://metabopro.com/rabujyoutorimu/
   - リセット500G説を整理する一方、750G到達報告の噂を追記。競合注記用。
   - confidence: RETROSPECTIVE_LOW_CONFLICT_SIGNAL

## missingFields

- baseGamesPer50: UNVERIFIED_AFTER_RESEARCH
- 据え置き時の天井G・モード・内部状態の完全保持契約: UNVERIFIED_AFTER_RESEARCH
- 電源OFF→ONのみの内部挙動: UNVERIFIED_AFTER_RESEARCH
- 設定2・3を含む設定変更時モード表の完全復元: PENDING_QA
- 設定変更時内部状態の全設定数値表: PENDING_QA
- 本機固有ガックン/初期出目/ランプ変更判別: NONE_CONFIRMED_AFTER_RESEARCH

## nextQaNotes

- 当時雑誌アーカイブやHAZUSE旧表示キャッシュから設定変更時モード/状態表の省略セルを直接回収できた場合のみ補完する。
- 「リセット後500G」と750Gハマリ報告の競合は、一次的な訂正資料・メーカー資料が回収できるまで本線+競合注記を維持する。
- 初代と2019年ラブ嬢2、2021年ラブ嬢IIプラス、2023年ラブ嬢3を混同しない。
