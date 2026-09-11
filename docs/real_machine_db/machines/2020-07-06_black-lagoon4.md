# BLACK LAGOON4

No: 1361
machineName: BLACK LAGOON4
machineNameVariants: BLACK LAGOON4 / ブラックラグーン4 / ブラクラ4 / S ATブラックラグーン4SY
manufacturer: スパイキー（七匠表記あり）
releaseDate: 2020-07-06（九州・愛知・静岡等の一部地域で先行導入） / 2020-07-20（全国導入）
formalModelName: S ATブラックラグーン4SY
certificationNumber: 0S0042

generation: 6号機
systemType: AT / 高純増ストレートAT / ゲーム数上乗せ型

## identity / release
- HAZUSEは型式 `S ATブラックラグーン4SY`、検定番号 `0S0042`、メーカー スパイキー、導入開始日2020-07-06を掲載。
- ちょんぼりすたは全国導入日を2020-07-20としつつ、九州・愛知・静岡など一部地域では2020-07-06から先行導入と明記。
- 遊技日本も全国ホール導入開始を2020-07-20と報道。
- 本DBは実導入の最初の確認日を時系列frontierに使うため `2020-07-06` をcanonical先行導入日とし、全国導入日 `2020-07-20` を別フィールド相当の段階導入情報として保持する。数値競合ではなく地域差/段階導入。

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.6% |
| 2 | 99.5% |
| 3 | 101.4% |
| 4 | 104.6% |
| 5 | 106.7% |
| 6 | 110.1% |
- なな徹、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
AT「ラグーンラッシュ」初当たり:
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/684 |
| 2 | 1/609 |
| 3 | 1/523 |
| 4 | 1/424 |
| 5 | 1/371 |
| 6 | 1/334 |
- 1geki、なな徹、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
- 約50G/50枚。
- 1geki、ちょんぼりすた等で一致。
- reliability: ANALYSIS_HIGH

## netIncrease
- AT「ラグーンラッシュ」: 約9.0枚/G。
- HAZUSE、ちょんぼりすた、業界記事で一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT「ラグーンラッシュ」はゲーム数管理型。
- 基本開始は `初期ゲーム数不定 or 30G+α`。直撃時40Gスタートとする業界評価資料もあるため、単一固定値に丸めない。
- 上乗せ特化ゾーン「ヘブンズラッシュ」を経由するルートあり。
- 疑似ボーナスもAT中に搭載するが、本DBでは物差し用の基本出玉性能をAT純増約9.0枚/G・ゲーム数管理型として保持。

## modeSpecificMinimumData
- 通常時はレア小役/ポイント経由のCZ・AT直撃が中心。
- 最大天井: 有利区間移行後670G+αでCZ「デスペラードバトル」or AT当選。
- 有利区間引継ぎ時は次回天井が470G+αへ短縮される可能性が高いと解析されるが、これは朝一設定変更恩恵ではなく有利区間継続時の挙動。
- AT後等に5Gの引き戻し「バラライカゾーン」へ移行する場合あり。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_NUMERIC_GAPS
resetQaLastUpdated: 2026-09-11

### settingChangeBehavior
- 設定変更時は天井ゲーム数RESET。
- 内部状態はRESETされ非有利区間へ移行。
- 有利区間RESET。
- 朝一は有利区間移行時に内部的にバラライカゾーン相当へ移行する場合があり、序盤数GはAT直撃チャンスとなる。
- ただし設定変更後100%バラライカゾーンではない。
- reliability: ANALYSIS_HIGH（複数解析一致）

### carryOverBehavior
- 据え置き時は天井ゲーム数をCARRY_OVER。
- 内部状態をCARRY_OVER。
- 有利区間をCARRY_OVER。
- 朝一の有利区間ランプ点灯は据え置き濃厚材料となる。
- reliability: ANALYSIS_HIGH

### powerCycleBehavior
- 純電源OFF→ONで設定変更を伴わない場合、天井・内部状態・有利区間は引継ぎ。
- ちょんぼりすた、期待値見える化の朝一表で一致。
- reliability: ANALYSIS_HIGH

### gameCounterReset
- 設定変更: RESET。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 最大天井は有利区間移行後670G+α。

### ceilingAfterReset
- 設定変更時は通常の有利区間開始として最大670G+α天井を再スタート。
- 設定変更専用の短縮天井は確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- 470G+α短縮は有利区間引継ぎ時の挙動であり、設定変更恩恵と混同しない。

### modeAfterReset
- 設定変更で非有利区間へ移行。
- 有利区間移行時、内部的にバラライカゾーンへ移行する場合あり。
- 設定変更専用のモード振り分け率は検索語・資料系統を変えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き / 純電源OFF→ON: 内部状態CARRY_OVER。
- リセット後のレヴィチャージランク等、個別内部状態の詳細初期振り分けは物差し用途を超えるため採らない。朝一専用公開値があるかは再探索したが固定値なし。

### advantageousSectionReset
- 設定変更: RESET / 非有利区間へ。
- 据え置き / 純電源OFF→ON: CARRY_OVER。
- 通常時は有利区間ランプが点灯するタイプ。
- 有利区間ランプはセグ右上の「★」。

### resetBenefits
- 有利区間移行時にバラライカゾーン相当へ移行する場合があり、朝一5〜6G程度はAT直撃機会がある。
- ただし突入率100%ではないため強い確定恩恵として扱わない。
- 設定変更専用短縮天井なし。

### resetPenalties
- NONE_CONFIRMED。
- 有利区間引継ぎ時に存在する470G+α短縮の可能性を、設定変更すると失うケースはホール運用上の機会差になりうるが、公開資料で「リセット不利」として定量化された値ではないため推定値化しない。

### resetDetection
- 通常時から有利区間ランプ点灯タイプ。
- 朝一消灯: 設定変更濃厚。
- 朝一点灯: 据え置き濃厚。
- ただし前日非有利区間終了や店側の対策など例外があるため確定扱いにしない。
- 朝一ステージは期待値見える化実戦上「ロアナプラ昼」。ちょんぼりすた当時表ではステージは調査中であり、変更判別の確定契約には使わない。
- 本機固有のガックン発生条件・発生率は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData / publicMorningNumbers
- 設定変更後のバラライカゾーン移行率そのものは公開固定値を確認できず `PUBLIC_NUMERIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 公開朝一挙動として「有利区間移行時にバラライカゾーンから始まる場合があり、5G間（解析記事によって朝一6G間表現）はAT直撃チャンス」を保持。
- 5G/6G差は、バラライカゾーンの継続5Gと、朝一の観測上6G間という数え方の差を含むため平均化せず説明分離。

## resetBehavior 再探索メモ
2026-09-11。`BLACK LAGOON4 / ブラックラグーン4 / ブラクラ4 / S ATブラックラグーン4SY / 0S0042 / スパイキー / 七匠` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 状態 / バラライカゾーン / ガックン / 有利区間 / 有利区間ランプ` を組み替え、HAZUSE、1geki、なな徹、ちょんぼりすた、期待値見える化、当時業界記事、旧攻略DBを横断。天井・状態・有利区間のRESET/CARRY_OVERとランプ判別は複数資料で一致。設定変更専用バラライカゾーン突入率、専用モード振り分け、本機固有ガックン契約は固定できずUNVERIFIEDとした。

## sources
取得日: 2026-09-11

1. HAZUSE「BLACK LAGOON4」
   - https://hazuse.com/machine/pachislot/0S0042/
   - 型式 `S ATブラックラグーン4SY`、検定番号 `0S0042`、導入開始2020-07-06、メーカー、純増、天井、AT基本仕様。
   - reliability: ANALYSIS_HIGH_DATABASE

2. HAZUSE「BLACK LAGOON4 基本スペック / AT・ART」
   - https://hazuse.com/machine/pachislot/0S0042/genre/201/
   - https://hazuse.com/machine/pachislot/0S0042/genre/209/
   - 6号機AT、純増約9枚、型式・検定、AT初期ゲーム数不定or30G+α、バラライカゾーン5G。
   - reliability: ANALYSIS_HIGH_DATABASE

3. ちょんぼりすた「ブラックラグーン4」
   - https://chonborista.com/slot/nanashow/109910/
   - 全国導入2020-07-20、一部地域7/6先行、約50G/50枚、AT純増9.0枚、設定別AT/出玉率、670G+α天井、有利区間ランプ、設定変更/電断挙動、朝一バラライカゾーン可能性。
   - reliability: ANALYSIS_HIGH

4. 1geki「BLACK LAGOON4 ボーナス・AT確率」
   - https://1geki.jp/slot/s_blacklagoon4/1/
   - AT初当たり設定1〜6 = 1/684 / 609 / 523 / 424 / 371 / 334。
   - reliability: ANALYSIS_HIGH

5. 1geki「BLACK LAGOON4 小役確率」
   - https://1geki.jp/slot/s_blacklagoon4/4/
   - 通常時ベース約50G/50枚。
   - reliability: ANALYSIS_HIGH

6. なな徹「ブラックラグーン4 ボーナス確率/機械割」
   - https://nana-press.com/kaiseki/machine/42/1297/
   - AT初当たり、機械割97.6〜110.1%。
   - reliability: ANALYSIS_HIGH

7. 期待値見える化「ブラックラグーン4 朝一リセット」
   - https://slotjin.com/tenjoukitaichi/blacklagoon4/
   - 設定変更=天井RESET/非有利区間/ランプ消灯、据え置き電断=引継ぎ、朝一6G間のAT直撃機会、通常時点灯型ランプによる判別。
   - reliability: ANALYSIS_HIGH_SECONDARY

8. 遊技日本「7/20導入 BLACK LAGOON4」2020-07-17
   - https://yugi-nippon.com/pachinko-new-machine/post-36459/
   - 全国ホール導入2020-07-20、純増約9枚、スパイキー/七匠、フィールズ発売情報。
   - reliability: INDUSTRY

9. パチンコ・パチスロ.com「新台導入日カレンダー2020」
   - https://pachinkopachisro.com/archives/53951811.html
   - 7/6群: ワンバーS1-30 / Sダンミツ / S OZ1-01、7/20群: Sブラックラグーン4。地域先行導入資料との日付差監査に使用。
   - reliability: SECONDARY_SCHEDULE

## missingFields
- 設定変更専用バラライカゾーン移行率
- 設定変更専用モード/内部状態の公開振り分け数値
- 本機固有ガックン発生条件・発生率

## conflicts
- releaseDateは資料差というより段階導入: HAZUSE 2020-07-06 / ちょんぼりすた 一部地域7/6先行・全国7/20 / 遊技日本 全国7/20。本DBは先行実導入2020-07-06をchronological canonicalとし、全国2020-07-20を併記。
- 朝一バラライカ関連の表現は「5G間」/「朝一6G間」が存在。ゾーン自体は5G。数え方の違いを平均化せず保持。

## reliabilitySummary
- identity/formalModel/certification: ANALYSIS_HIGH_DATABASE
- releaseDate: CONFLICT_PHASED_REGIONAL_ROLLOUT / INDUSTRY + ANALYSIS_HIGH
- payoutRate/ATProbability/base/netIncrease: ANALYSIS_HIGH
- resetBehavior core: ANALYSIS_HIGH
- reset-specific numeric distribution: UNVERIFIED

recordStatus: COMPLETE_CORE_RESET_V07
