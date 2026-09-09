# No.1177 パチスロ 超GANTZ

- recordStatus: `COMPLETE_CORE_WITH_RESET_BEHAVIOR_V0_7`
- machineName: パチスロ 超GANTZ
- aliases: `超GANTZ`, `超ガンツ`
- manufacturer: スパイキー製造 / 七匠開発 / フィールズ総発売元
- releaseDateCanonical: 2018-03-05
- generation: 5.9号機 / 5号機
- systemType: A+ART / 差枚数管理型ART / 有利区間あり
- formalModelName: `パチスロ超GANTZ／SA`
- certificationNumber: `7S1534`
- collectedAt: 2026-09-10

## releaseDateEvidence
- HAZUSEは型式`パチスロ超GANTZ／SA`、検定番号`7S1534`、導入開始日2018-03-05を掲載。
- 一撃も導入予定日2018-03-05を掲載。
- グリーンべるとは2018-02-28の記事で納品を2018-03-04予定と報道。ホール導入開始日2018-03-05と矛盾しない。

## manufacturerEvidence
- グリーンべると/一撃の権利表記は「製造元／株式会社スパイキー、開発／株式会社七匠、総発売元／フィールズ株式会社」。
- HAZUSEのメーカー欄は七匠、他解析DBにはスパイキー表記もあるため、役割を潰して単一メーカーへ正規化せず分離保持する。

## performanceCore

### payoutRateBySetting
- setting1: 97.9%
- setting2: 98.6%
- setting3: 100.3%
- setting4: 103.1%
- setting5: 105.5%
- setting6: 110.2%
- 一撃、HAZUSE、期待値見える化/ちょんぼりすたで一致。

### initialHitBySetting
ART初当たり:
- setting1: 1/479
- setting2: 1/432
- setting3: 1/448
- setting4: 1/385
- setting5: 1/404
- setting6: 1/359

CZ合算:
- setting1: 1/99.9
- setting2: 1/99.9
- setting3: 1/99.9
- setting4: 1/97.1
- setting5: 1/97.1
- setting6: 1/93.8

サバイバルZONE:
- setting1-3: 1/299
- setting4-5: 1/275
- setting6: 1/250

転送モード:
- setting1-6: 1/150

### baseGamesPer50
- 約40G/50枚
- 一撃とHAZUSEで一致。

### netIncrease
- ART「サバイバルGAME」: 約2.0枚/G
- 差枚数管理型。

### basicPayout
- ART開始時は上乗せ特化ゾーン`GANTZ RUSH`または`超GANTZ RUSH`で初期差枚数を決定。
- 超GANTZ RUSHは最低200枚以上上乗せ保証、平均上乗せ約400枚以上と業界/解析資料に掲載。
- 固定1セット枚数型ではないためbasicPayoutは差枚数管理構造として保持。

### ceiling
- 通常の「ART確定ゲーム数天井」ではなくCZ天井状態を搭載。
- 条件1: 転送モード間500G経過。
- 条件2: 転送モード5回スルー。
- 条件成立後、チャンス目A成立でCZ「サバイバルZONE」当選へつながる。
- 一部資料の「天井非搭載」はART確定型の一般的天井がない意味と解釈し、CZ天井状態の直接解析を優先して定義を分離する。

## modeSpecificMinimumData
- 通常時はCZ「サバイバルZONE」「転送モード」等からARTを目指す。
- 転送モードは内部的にリアルボーナスのため、分類上はA+ARTとしても扱える。
- ARTは差枚数管理型、純増約2.0枚/G。
- 通常時に低確（非有利区間）、通常/高確/超高確/チャンス高確（有利区間）の状態が存在する。
- 有利区間ARTのリミット挙動として、ART状態で有利区間1400G消化後にリミットモードへ移行する解析あり。

## resetBehavior

### settingChangeBehavior
- 液晶図柄: `1・2・3`
- 液晶ステージ: `心斎橋`
- CZメーター: リセット。
- 設定変更時にはCZポイントを必ず1ptまたは2pt獲得する抽選が行われる（液晶上からは判別不能）。
- 設定変更後最初のチャンス目A成立時は全設定共通50.0%でCZ当選。
- CZ天井状態を構成する転送モード間ゲーム数/スルー回数が設定変更でどう扱われるかを項目ごとに直接明示した本機固有資料は、今回確認範囲では固定できず`UNVERIFIED_AFTER_RESEARCH`。CZメーターリセットから他カウンタまで推測しない。

### carryOverBehavior
- 据え置き時のCZメーター内部ポイントは引き継ぐ。朝一液晶上のメーター表示は0に見える。
- 液晶図柄は1・2・3、ステージは心斎橋となる資料あり。
- 転送モード間500Gカウンタ/5回スルーカウンタの据え置き独立契約は`UNVERIFIED_AS_DISTINCT_CONDITION_AFTER_RESEARCH`。

### powerCycleBehavior
- 純電源OFF→ON時、CZメーターは内部的に引き継ぐが見た目は0。
- 液晶図柄: `1・2・3`
- 液晶ステージ: `心斎橋`
- 一撃の設定変更/電源ON-OFF比較表で直接確認。
- その他の有利区間状態、CZ天井用各カウンタについて純電断時の直接契約は`UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- CZmeter: `RESET_ON_SETTING_CHANGE / CARRY_OVER_ON_POWER_CYCLE`
- transferModeInterval500GCounter: `UNVERIFIED_AFTER_RESEARCH`
- transferMode5ThroughCounter: `UNVERIFIED_AFTER_RESEARCH`
- ART確定型ceilingCounter: `NOT_APPLICABLE`

### ceilingAfterReset
- resetSpecificShortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- 通常CZ天井状態条件は転送モード間500Gまたは5回スルーだが、設定変更時専用の短縮値は確認されない。

### modeAfterReset
- 朝一専用モード振り分け: `NONE_CONFIRMED_AFTER_RESEARCH`
- CZメーター初期ポイントのみ公開数値あり。

### stateAfterReset
- CZmeter state: setting change時に再生成、power cycle時に内部引継ぎ。
- 通常/高確/超高確等の内部状態について設定変更時の振り分けを直接固定できる資料は`UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 有利区間を使用する5.9号機であることは確認。
- 設定変更時に有利区間そのものが必ず非有利区間へ移行する、と本機固有の朝一比較表で直接明記した資料は今回固定できず、一般論から補完せず`UNVERIFIED_AFTER_RESEARCH`。
- 低確＝非有利区間、通常以上＝有利区間という通常時状態定義は解析で確認。

### resetBenefits
- 設定変更後最初のチャンス目A成立時、CZ「サバイバルZONE」当選率50.0%（全設定共通）。
- 設定変更時CZポイント: 1ptまたは2ptを必ず獲得。
- これらは朝一客の挙動に影響する主要リセット恩恵として採用。

### resetPenalties
- 設定変更によりCZメーターの前日蓄積は消去される。
- その他の主要な数値的不利要素: `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 液晶図柄/ステージは設定変更・電源OFF→ONとも同じため、それだけでは判別不可。
- 据え置きはCZメーター内部ポイントを引き継ぐ一方、液晶上は0に見える。
- 前日メーターと当日挙動を追跡し、内部蓄積との整合から据え置きを推測する手法が当時解析で紹介されているが確定判別ではない。
- 設定変更後初回チャンス目AでCZ直撃した場合は変更期待が上がるが、50%抽選であり確定ではない。
- 本機固有のガックン確定契約/発生率: `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- CZpointAfterReset:
  - 1pt: 75.0%
  - 2pt: 25.0%
  - all settings
- firstChanceAAfterReset_CZHitRate: 50.0%（全設定共通）
- resetSpecificShortenedCeiling: `NONE_CONFIRMED_AFTER_RESEARCH`
- gakkunProbability: `UNVERIFIED_AFTER_RESEARCH`

## morningRelatedPublicNumbers
- リセット時CZポイント振り分け: 1pt 75.0% / 2pt 25.0%。
- 設定変更後初回チャンス目AでCZ当選: 50.0%。
- リセット狙い単独で十分な期待値があると断定する資料ではなく、当時解析では「現状ではリセット狙い不可」と評価した資料もあるため、恩恵の存在と立ち回り評価を分離する。

## conflicts
- `CLASSIFICATION_ART_VS_A_PLUS_ART`:
  - 多くの機種DBはART機と表記。
  - 転送モードがリアルボーナスであるため解析資料にはA+ART表記もある。
  - 数値競合ではなく分類粒度の差として双方保持。
- `CEILING_WORDING_NON_EQUITY`:
  - 一部まとめ資料は「天井非搭載」と表記する一方、一撃等は「CZ天井状態」を明示。
  - ART確定型天井とCZ天井状態は別定義のため平均・統合せず、CZ天井条件をレコードに明記。
- `MANUFACTURER_LABEL_VARIATION`:
  - HAZUSE等では七匠、別DBではスパイキーと表記。
  - 業界記事の権利表記で製造元=スパイキー、開発=七匠、総発売元=フィールズを確認したため役割分離して保持。

## missingFields
- CZ天井用500G/5スルーカウンタの設定変更・据え置き・純電断時の直接契約: `UNVERIFIED_AFTER_RESEARCH`
- 通常/高確/超高確等の設定変更時状態振り分け: `UNVERIFIED_AFTER_RESEARCH`
- 本機固有の有利区間設定変更時処理の直接記載: `UNVERIFIED_AFTER_RESEARCH`
- ガックン確定契約/発生率: `UNVERIFIED_AFTER_RESEARCH`

## sources
取得日: 2026-09-10

1. グリーンべると — 転送先→超パチスロ！EXTRAの興奮がパチスロに
   - https://web-greenbelt.jp/00010263/
   - 2018-02-28発表記事。納品3/4予定、純増約2.0枚/G、差枚数管理型ART、製造元スパイキー/開発七匠/総発売元フィールズを確認。
   - confidence: `INDUSTRY`

2. HAZUSE — パチスロ 超GANTZ
   - https://hazuse.com/machine/pachislot/7S1534/
   - 型式、検定番号、2018-03-05導入、設定別CZ/ART、約40G/50枚、機械割、有利区間を用いる通常時仕様。
   - confidence: `ANALYSIS_HIGH`

3. 一撃 — 機種概要・スペック
   - https://1geki.jp/slot/s_gantz/
   - 2018-03-05、ART初当たり、機械割、純増約2.0枚/G、差枚数管理型ART。
   - confidence: `ANALYSIS_HIGH`

4. 一撃 — 天井/設定変更
   - https://1geki.jp/slot/s_gantz/3/
   - CZ天井状態条件、設定変更時CZメーターリセット、電源OFF→ON時CZメーター内部引継ぎ、朝一図柄/ステージ。
   - confidence: `ANALYSIS_HIGH`

5. 一撃 — サバイバルZONE通常時
   - https://1geki.jp/slot/s_gantz/42/
   - 設定変更時CZポイント1pt 75%/2pt 25%、設定変更後初回チャンス目AのCZ当選率50%。
   - confidence: `ANALYSIS_HIGH`

6. 一撃 — 通常時の状態移行
   - https://1geki.jp/slot/s_gantz/46/
   - 低確=非有利区間、通常/高確/超高確等=有利区間の状態構造。
   - confidence: `ANALYSIS_HIGH`

7. 一撃 — リミットモード/エンディング
   - https://1geki.jp/slot/s_gantz/90/
   - ART中有利区間1400G消化後のリミットモード移行を確認。
   - confidence: `ANALYSIS_HIGH`

8. 期待値見える化 — 超ガンツ
   - https://slotjin.com/slot/chogantz-spec/
   - 設定別CZ/ART/機械割、約40G、A+ART表記、朝一解析のクロスチェック。
   - confidence: `ANALYSIS_SINGLE`

9. スロパチクエスト — 超GANTZ
   - https://www.slopachi-quest.com/article/cho-gantz/
   - 朝一据え置き/リセット比較、リセット時CZポイント75/25、初回チャンス目A 50%、変更判別の実戦的注意。
   - confidence: `ANALYSIS_SINGLE`
