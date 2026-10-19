# パチスロ 緋弾のアリアⅡ

recordNo: 1548
machineName: パチスロ 緋弾のアリアⅡ
manufacturer: JFJ製造 / 藤商事販売
formalModel: S緋弾のアリアⅡJZ
inspectionCode: 230177
releaseDate: 2023-02-06
generation: 6.5号機 / メダル機
systemType: AT / 周期CZ経由・超高純増AT
settings: L / 1 / 2 / 4 / 5 / 6

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.6%
- 設定4: 103.1%
- 設定5: 106.0%
- 設定6: 110.1%
- 設定L: 公開通常スペック値なし

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「スカーレットバケーションタイム」初当たり
- 設定1: 1/445.2
- 設定2: 1/392.1
- 設定4: 1/320.3
- 設定5: 1/272.9
- 設定6: 1/243.4
- 設定L: 調査中 / 通常運用対象外

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.7〜33.6G/50枚（設定1〜6）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「スカーレットバケーションタイム」: 約9.0枚/G。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## basicPayout
- AT初当たり時は「ライトニングバレットチャンス」で初期G数を決定。
- 初期平均ゲーム数: 約45.1G。
- ATはゲーム数上乗せ型、純増約9.0枚/G。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## modeSpecificMinimumData
- 通常時は約100G+αを1周期とする周期管理。
- 最大10周期目のCZ「クライマックスフェーズ」で勝利濃厚＝AT当選濃厚。
- 通常モード群: 朝一 / 通常 / チャンス / 引き戻し / 天国。
- 朝一モードは設定変更後のみ選択。
- 引き戻しは2周期以内AT、天国は1周期目ATが濃厚。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_DEDICATED_MORNING_MODE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井、モード、周期回数、7セグ表示、バレットをRESET。
- 設定変更後は専用「朝一モード」へ移行。
- 液晶はヘリ待機ステージから開始。
- 設定変更後は1周期目または2周期目でCZ「クライマックスフェーズ」当選濃厚。

### carryOverBehavior
- 据え置き時は有利区間、天井、モード、周期、7セグ、バレットをCARRY_OVER。
- 液晶は武偵ステージ開始。
- 7セグ内部色が緑/赤でも、朝一見た目は白表示になるため色だけでは内部状態を完全に読めない。

### powerCycleBehavior
- 純電源OFF→ON時は7セグ表示値、周期回数、バレットをCARRY_OVER。
- 7セグの色は白で復帰。
- 液晶状態は引き継ぐが通常時は武偵ステージ固定とする解析。
- 純電源OFF→ON単独の有利区間状態について、機種別に明示した直接資料は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。据え置き一般挙動から推測転記しない。

### gameCounterReset
- 設定変更: 周期 / 天井RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: 周期回数CARRY_OVER。
- 最大天井は10周期目CZ勝利濃厚。

### ceilingAfterReset
- 設定変更専用の周期天井短縮は確認できず、朝一モードも最大10周期。
- ただし設定変更後は1〜2周期目でCZ当選濃厚となる朝一恩恵あり。

### modeAfterReset
- 設定変更: 専用「朝一モード」へ移行。
- 朝一モード最大天井: 10周期。
- 据え置き: 前日モードCARRY_OVER。
- 純電源OFF→ON: モードそのものを明示した直接表は固定できなかったため `UNVERIFIED_AFTER_RESEARCH`。周期・バレット等は引継ぎ確認済み。

### stateAfterReset
- 周期、7セグ、バレットなど公開されている進行状態は設定変更でRESET、据え置きでCARRY_OVER。
- バレット高確 / ヒステリア高確などの内部状態について、設定変更・純電断時を直接対比した公開契約は十分な再探索後も固定できず `UNVERIFIED_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 有利区間ランプは非搭載で、ランプによる変更判別不可。
- 純電源OFF→ON単独: `UNVERIFIED_AFTER_RESEARCH`（直接契約を推測補完しない）。

### resetBenefits
- 設定変更後専用「朝一モード」。
- 設定変更後は1周期目または2周期目でCZ当選濃厚。
- 設定変更後2周期以内のAT期待度は約60%とする解析。

### resetPenalties
- 設定変更で前日の天井/周期進行、モード、7セグ、バレットを失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更時はヘリ待機ステージ、据え置き時は武偵ステージ開始となり、朝一ステージが主要な変更判別材料。
- 据え置き時は前日の7セグ、周期、バレットを引き継ぐため、前日情報との比較も判別材料。
- 有利区間ランプは非搭載。
- 本機固有のリールガックン条件 / 発生率は `緋弾のアリアII / 緋弾のアリアⅡ / S緋弾のアリアⅡJZ / JFJ / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / ガックン` を組み替え、攻略・旧DB・回顧資料まで再探索したが直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後: 1〜2周期目でCZ当選濃厚。
- 設定変更後2周期以内: AT期待度約60%。
- 朝一モード天井: 最大10周期。
- 1周期: 約100G+α。

### publicMorningNumbers
- 設定変更後2周期以内のAT期待度: 約60%。
- 設定変更後CZ: 1周期目または2周期目で当選濃厚。
- 朝一専用モードの具体的な周期別CZ振り分け率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `パチスロ緋弾のアリアⅡ / 緋弾のアリアII / 緋弾のアリア2 / S緋弾のアリアⅡJZ / JFJ / 藤商事` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / 周期 / 朝一モード / ガックン / 有利区間` を組み替えて検索。
- JFJ公式、遊技日本、なな徹、一撃、パチ7、パチマガスロマガ、P-WORLD、必勝本、旧解析系を横断。

## conflicts
- **メーカー表記**: 一般解析には「藤商事」表記があるが、公式製品ページ・業界発表は製造元JFJ、販売発表主体藤商事。canonicalは `JFJ製造 / 藤商事販売`。
- **検定番号体系**: 大阪府検定切れ資料で `230177`。本DBで多い `2Sxxxx` 形式ではないため、別形式としてそのまま保存し推測変換しない。

## sources
取得日: 2026-09-13

- JFJ公式製品ページ: https://www.fujimarukun.co.jp/products/s_aria2/
  - JFJ、JZ、純増9枚AT、設定別AT確率。
- 遊技日本: https://yugi-nippon.com/pachinko-new-machine/post-55402/
  - JFJ製造、型式 `S緋弾のアリアⅡJZ`、2023-02-06、設定別AT/出玉率、AT終了後性能。
- G-net 大阪府検定切れ情報: https://g-net-ps.com/content/kenteikire-2025-10-2/
  - `S緋弾のアリアⅡJZ / JFJ / 230177`。
- パチ＆スロ必勝本 基本スペック: https://p.hisshobon.jp/machine/4039/1/93440
  - 設定別AT、機械割、導入日。
- パチ＆スロ必勝本 スペック: https://p.hisshobon.jp/vpage/2516/2
  - 32.7〜33.6G/50枚、純増9枚/G、2023-02-06。
- なな徹 総合: https://nana-press.com/kaiseki/machine/502/
  - AT/機械割、ベース、周期・モード概要。
- なな徹 朝一: https://nana-press.com/kaiseki/machine/502/13458/
  - 設定変更/据え置きの有利区間・天井・モード・周期・7セグ・バレット、開始ステージ、朝一モード、有利区間ランプ非搭載。
- 一撃 モード: https://1geki.jp/slot/s_aria2/45/
  - 朝一専用モード、設定変更後1〜2周期CZ、2周期以内AT期待度約60%。
- 一撃 天井/電断: https://1geki.jp/slot/s_aria2/4/
  - 最大10周期、設定変更時と電源OFF→ON時の7セグ・周期・バレット・ステージ挙動。
- パチマガスロマガ AT: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/jfj_slot/03/at01.php
  - 純増約9枚/G、初期平均45.1G。
- パチ7 天井: https://pachiseven.jp/machines/6683/cutout/3
  - 最大10周期天井、朝一関連の別系統照合。

## missingFields
- 朝一モードの具体的な周期別CZ振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 純電源OFF→ON単独の有利区間状態: `UNVERIFIED_AFTER_RESEARCH`。
- バレット高確/ヒステリア高確等の内部状態のリセット契約: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有ガックン条件 / 発生率: `UNVERIFIED_AFTER_RESEARCH`。

## status
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: COMPLETE_RESET_CORE_WITH_DEDICATED_MORNING_MODE_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
