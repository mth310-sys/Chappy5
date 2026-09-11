# パチスロラブ嬢2プラス

No: 1397
machineName: パチスロラブ嬢2プラス
machineNameVariants: パチスロラブ嬢2プラス / パチスロラブ嬢Ⅱプラス / ラブ嬢2プラス / ラブ嬢2+ / Sパチスロラブ嬢2プラスL4
manufacturer: オリンピア
releaseDate: 2021-03-08
formalModelName: Sパチスロラブ嬢2プラスL4
certificationNumber: 0S1377

generation: 6.1号機
systemType: AT / 周期抽選 / 差枚数管理型・ループストック型AT

## identity / release
- 遊技日本は平和発表として、製造元オリンピア、型式 `Sパチスロラブ嬢2プラスL4`、全国導入2021-03-08を報道。
- HAZUSEで型式、検定番号 `0S1377`、メーカー オリンピア、導入開始日2021-03-08を照合。
- reliability: INDUSTRY / ANALYSIS_HIGH

## payoutRateBySetting
| 設定 | 出玉率 |
|---:|---:|
| 1 | 97.4% |
| 2 | 99.3% |
| 3 | 102.0% |
| 4 | 104.9% |
| 5 | 107.7% |
| 6 | 110.0% |
- HAZUSE、1geki、ちょんぼりすたで一致。
- reliability: ANALYSIS_HIGH

## initialHitBySetting
| 設定 | AT初当たり |
|---:|---:|
| 1 | 1/303.1 |
| 2 | 1/285.9 |
| 3 | 1/262.1 |
| 4 | 1/240.6 |
| 5 | 1/218.1 |
| 6 | 1/203.9 |
- HAZUSEは設定1を1/303.0表記、1geki・ちょんぼりすたは1/303.1。設定2〜6は一致。設定1差は丸め差として1/303.1をcanonicalとし、原資料差を注記する。
- reliability: ANALYSIS_HIGH

## baseGamesPer50
| 設定 | G/50枚 |
|---:|---:|
| 1 | 38.4G |
| 2 | 39.1G |
| 3 | 39.7G |
| 4 | 40.7G |
| 5 | 41.0G |
| 6 | 41.4G |
- 1geki自社調査値。複数の攻略資料でも設定1代表約38.4G/50枚を確認。
- reliability: ANALYSIS_HIGH for setting1 representative / ANALYSIS_SINGLE for full setting table

## netIncrease
- AT「GOHOUBI RUSH」: 約2.7枚/G。
- 減少区間なし。差枚数管理型＆ループストック抽選方式。
- 遊技日本、グリーンべると、HAZUSE、1gekiで一致。
- reliability: INDUSTRY / ANALYSIS_HIGH

## basicPayout
- AT初当たり時は枚数上乗せ特化ゾーンから開始し、初当たり時は100枚保証。
- ATは獲得差枚数消化後に継続チャンスへ移行。継続成功時はラブ嬢ルーレットで報酬を決定する。
- VIP BONUSはAT3回継続ごとに突入する疑似ボーナス。HAREM BONUSは20G継続のプレミアム疑似ボーナス。
- 固定1セット獲得枚数型ではないため、比較用基本性能は「初当たり100枚保証 + 純増約2.7枚/G」として保持。
- reliability: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は周期抽選方式。1・3・7・10周期目がチャンス周期。
- 周期天井: 通常時10周期到達でAT当選。
- 押し順ラブ目回数天井: 同一有利区間内で最大50回成立するとAT当選側へ到達。
- アフターデートチャンス天井: 同一有利区間内で3回失敗すると次周期でヘルプ嬢が登場しAT当選濃厚。
- 10周期天井の平均到達Gは設定1 631.9G / 2 626.6G / 3 619.8G / 4 615.7G / 5 611.2G / 6 606.6G。これは固定G数天井ではなく平均値として保存する。

coreStatus: COMPLETE_CORE

## resetBehavior
resetBehaviorVersion: v0.7
resetBehaviorQA: PARTIAL_AFTER_MULTI_SOURCE_RESEARCH_WITH_LAMP_CONFLICT
resetQaLastUpdated: 2026-09-12

### settingChangeBehavior
- 本機固有の設定変更時について、天井（周期・押し順ラブ目回数・ADC失敗回数）、内部状態、開始ステージの直接契約は、当時攻略資料・後年攻略資料・型式名検索を横断しても高信頼資料で固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの朝一表は設定変更時の天井・内部状態・ステージをすべて「調査中」と掲載。
- 後年の立ち回り資料には「リセット恩恵 特になし」という記述があるが、個別カウンターのRESET/CARRY_OVERを明示していないため、天井リセットの根拠には使用しない。

### carryOverBehavior
- 据え置き時の周期数、押し順ラブ目成立回数、アフターデートチャンス失敗回数、内部状態の個別引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。
- 待機画面で現在周期数・押し順ラブ目成立回数を確認できること自体は公開されているが、朝一据え置き時の表示/内部値契約とは区別する。

### powerCycleBehavior
- 純電源OFF→ON時の周期数、押し順ラブ目成立回数、ADC失敗回数、内部状態、液晶開始ステージの直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- ちょんぼりすたの朝一表では電源OFF→ON時の天井・内部状態・ステージはいずれも「調査中」。後継機や前作から推測転記しない。

### gameCounterReset
- 設定変更: `UNVERIFIED_AFTER_RESEARCH`。
- 据え置き: `UNVERIFIED_AFTER_RESEARCH`。
- 純電源OFF→ON: `UNVERIFIED_AFTER_RESEARCH`。
- 本機は単純なG数天井ではなく、周期数・押し順ラブ目回数・ADC失敗回数の複数進行値を持つため、各値を一括推測しない。

### ceilingAfterReset
- 通常時の天井自体は、10周期 / 押し順ラブ目最大50回 / ADC3回失敗後の次周期という3系統を確認。
- 設定変更専用の周期短縮、回数短縮、固定G数短縮は十分な再探索後も確認できず `PUBLIC_RESET_SPECIFIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 「リセット恩恵 特になし」とする後年単一資料は存在するが、当時資料の「調査中」を上書きするほどの直接解析根拠を確認できない。

### modeAfterReset
- 通常時は周期ごとにステージを選択するが、設定変更専用モード/周期テーブルの公開値は確認できず `UNVERIFIED_AFTER_RESEARCH`。
- 1・3・7・10周期目が通常のチャンス周期であることと、設定変更専用優遇は分離する。

### stateAfterReset
- 華舞姫町ステージには通常 / 高確 / 超高確 / 確定の内部状態が存在する。
- ただし設定変更時および純電断時の初期状態振り分け/引継ぎ契約は `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- AT後はサービスタイム等の引き戻し区間を経て有利区間終了/再移行する構造を確認。
- 設定変更時・据え置き時・純電断時それぞれの本機固有有利区間契約を直接明示した高信頼資料は固定できず、推測せず `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 後年の立ち回り資料では「リセット狙い 特に狙えない」「リセット恩恵 特になし」と整理されている。
- ただし設定変更専用の定量恩恵/初回周期優遇を裏付ける当時解析値は確認できないため、`NO_PUBLIC_RESET_SPECIFIC_NUMERIC_BENEFIT_FOUND_AFTER_RESEARCH`。
- reliability: ANALYSIS_SINGLE for “特になし” summary / UNVERIFIED for detailed contract

### resetPenalties
- 設定変更専用の定量的不利要素は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetDetection
- 有利区間ランプ位置はクレジット右下のドットで資料間一致。
- ただし通常時の点灯状態について資料競合あり。
  - ちょんぼりすた: 「通常時は消灯しているタイプなのでリセット判別不可」。
  - パチスロメソッド: 「各解析サイトでは非点灯とされるが実際は点灯」とし、朝一消灯=設定変更濃厚 / 点灯=据え置き濃厚（消灯閉店等を除く）と記載。
- 平均化・一方採用は行わず `CONFLICT_ADVANTAGEOUS_SECTION_LAMP_NORMAL_STATE_AND_RESET_DETECTION` とする。
- 本機固有のガックン条件・発生率は、機種名/型式/設定変更/リセット/朝一/ガックンで再探索したが固定資料を確認できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更専用の短縮天井G数: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用のモード/ステージ振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用の朝一特定G以内AT当選率: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 通常仕様の周期天井平均到達G（リセット専用値ではない）: 設定1 631.9G / 2 626.6G / 3 619.8G / 4 615.7G / 5 611.2G / 6 606.6G。

## sources
取得日: 2026-09-12

1. 遊技日本「【3/8導入】パチスロラブ嬢2プラス【今作のATは枚数管理型に】」
   - https://yugi-nippon.com/pachinko-new-machine/post-41744/
   - 製造元、型式、導入日、6.1号機、純増、AT基本構造。
   - reliability: INDUSTRY

2. グリーンべると「6.1号機で登場！軽い初当たり確率、AT出玉性能アップ実現／パチスロラブ嬢2プラス」
   - https://web-greenbelt.jp/post-43449/
   - 平和発表、オリンピア製、納品予定、初当たりレンジ、純増、100枚保証、周期ゲーム性。
   - reliability: INDUSTRY

3. HAZUSE「パチスロラブ嬢Ⅱプラス」
   - https://hazuse.com/machine/pachislot/0S1377/
   - 型式、検定番号、導入日、メーカー、設定別機械割/AT初当たり、純増、周期/内部状態、AT仕様。
   - reliability: ANALYSIS_HIGH

4. 1geki「パチスロラブ嬢2プラス 解析・スペック」
   - https://1geki.jp/slot/s_lovejyo2plus/
   - 設定別AT初当たり/出玉率、導入日、6.1号機、純増、AT仕様。
   - reliability: ANALYSIS_HIGH

5. 1geki「小役確率」
   - https://1geki.jp/slot/s_lovejyo2plus/4/
   - 設定別50枚ベース。
   - reliability: ANALYSIS_SINGLE

6. 1geki「GOHOUBI RUSH」
   - https://1geki.jp/slot/s_lovejyo2plus/81/
   - 純増、差枚数管理、初当たり100枚保証。
   - reliability: ANALYSIS_HIGH

7. なな徹「ラブ嬢2プラス 天井/ヤメ時」
   - https://nana-press.com/kaiseki/machine/112/3249/
   - 10周期天井、設定別平均天井G、ADC3回失敗天井、押し順ラブ目回数天井。
   - reliability: ANALYSIS_HIGH

8. パチ7「ラブ嬢2プラス 天井・立ち回り」
   - https://pachiseven.jp/machines/6233/cutout/3
   - 3種天井、待機画面で周期/押し順ラブ目回数確認。朝一リセット欄は調査中。
   - reliability: ANALYSIS_HIGH

9. ちょんぼりすた「ラブ嬢2プラス」
   - https://chonborista.com/slot/orinpia-slot/129350/
   - スペック、ベース、天井、朝一設定変更/電源OFF→ONが調査中、有利区間ランプ通常時消灯・判別不可という記載。
   - reliability: ANALYSIS_HIGH

10. すろぱちくえすと「パチスロ ラブ嬢2+ 6.1号機 天井解析まとめ」
    - https://www.slopachi-quest.com/article/rabujou2plus-tenjou/
    - 2021-03/04時点で朝一挙動、リセット恩恵、判別を調査中としていた当時資料。
    - reliability: ANALYSIS_SINGLE

11. パチスロメソッド「ラブ嬢2+(プラス) 天井期待値 ゾーン 狙い目 やめ時 リセット判別」
    - https://slotmethod.jp/archives/10976/
    - 後年整理としてリセット恩恵なし、通常時ランプ点灯・朝一消灯/点灯判別を主張。ランプ通常状態は他解析と競合するためCONFLICT保持。
    - reliability: ANALYSIS_SINGLE

12. ゼンリン「2024年1月 パチスロ検定満了機種情報（北海道）」
    - https://zenrin-net.co.jp/9296/
    - 型式 `Sパチスロラブ嬢2プラスL4` を別系統資料で照合。
    - reliability: INDUSTRY

## missingFields
- settingChangeBehaviorの周期/押し順ラブ目/ADC失敗回数RESET/CARRY_OVER契約: UNVERIFIED_AFTER_RESEARCH
- carryOverBehaviorの各内部進行値契約: UNVERIFIED_AFTER_RESEARCH
- powerCycleBehavior: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用モード/ステージ振り分け: UNVERIFIED_AFTER_RESEARCH
- 設定変更専用朝一数値: PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH
- 本機固有ガックン: UNVERIFIED_AFTER_RESEARCH

## conflicts
- `CONFLICT_ADVANTAGEOUS_SECTION_LAMP_NORMAL_STATE_AND_RESET_DETECTION`: 通常時有利区間ランプについて、ちょんぼりすたは消灯・判別不可、パチスロメソッドは実機上点灯・朝一判別可能と主張。双方を保持し、確定判別仕様として採用しない。
- AT初当たり設定1はHAZUSE 1/303.0、1geki等 1/303.1。丸め差と判断し1/303.1をcanonical表示するが原差を保持。
