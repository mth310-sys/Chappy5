# パチスロ 這いよれ！ニャル子さん

recordNo: 1539
machineName: パチスロ 這いよれ！ニャル子さん
manufacturer: EXCITE（ニューギングループ）
formalModel: Sハイヨレ!ニャルコサンY
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-12-05
generation: 6.5号機 / メダル機 / 有利区間最大4000G世代
systemType: AT / 擬似ボーナス経由・AT高確率ゾーン経由型

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.7%
- 設定3: 100.7%
- 設定4: 103.5%
- 設定5: 106.5%
- 設定6: 110.1%

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### 初当たり合算
- 設定1: 1/226.4
- 設定2: 1/221.6
- 設定3: 1/214.8
- 設定4: 1/202.5
- 設定5: 1/191.6
- 設定6: 1/180.1

### AT「邪神決闘」初当たり
- 設定1: 1/476.4
- 設定2: 1/461.4
- 設定3: 1/437.2
- 設定4: 1/401.4
- 設定5: 1/368.7
- 設定6: 1/334.9

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約32.6G/50枚（設定1）。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 擬似ボーナス / AT「邪神決闘」: 約2.7枚/G。

信頼度: INDUSTRY / ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## basicPayout
- 「這いよれBONUS」: 40G継続、平均約104枚。
- 「ニャル子さん劇場」: 20G継続、平均約52枚。
- 「宿命バトルボーナス」: 継続率管理型、1セット5G（初回8G）、4セット保証、75% / 85% / 91%の継続率、最大20セット、終了後AT突入。
- AT「邪神決闘」: 1セット30G、純増約2.7枚/G。
- AT高確率「でんぶゾーン」: 15G+α、ボーナス後・AT終了後に移行。
- 上位AT「超邪神決闘」と特化ゾーン「でんぶの極」を搭載。「でんぶの極」は6G+α、平均上乗せ約109G、期待獲得枚数約1400枚の公開解析あり。

信頼度: INDUSTRY / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は約1/3.8で出現する「ニャル目」の連続回数・累計回数、レア役、CZ「ニャル子クエスト」等から擬似ボーナスを目指す。
- ニャル目4連でCZ当選25.0%、5連でCZ濃厚。
- ニャル目20回ごとにCZ / ボーナス抽選。160回成立でボーナス当選の天井。
- ニャル目160回天井は通常時出現率1/3.8単純換算では約608G相当だが、高確率中は1/1.5のため固定G数天井ではない。
- 通常時の「でんぶゾーン」は4スルー後、次回ボーナス当選時にAT確定（5回目でAT）。
- 有利区間は最大4000G。
- AT終了時の一部で有利区間リセット。終了画面で襖が閉まると有利区間リセット濃厚、閉まらない場合は継続とする解析あり。
- 有利区間継続回数に応じた「でんぶの極」抽選は、リセット後0.4% / 1回継続3.1% / 2回継続25.0% / 3回継続100%。これは朝一設定変更専用値ではないため通常システム値として分離。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_SHORTENED_DENDU_ZONE_SKIP_CEILING
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- ニャル目回数天井RESET。
- 内部状態RESET。
- モードRESET。
- 「でんぶゾーン」スルー回数天井RESET。
- 設定変更時のみ、でんぶゾーンのスルー回数天井が通常より1回短縮される。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- ニャル目回数天井CARRY_OVER。
- 内部状態CARRY_OVER。
- モードCARRY_OVER。
- でんぶゾーンのスルー回数もCARRY_OVER扱いとする高信頼解析の朝一表に整合。

### powerCycleBehavior
- 純電源OFF→ON時は天井を引き継ぐとする解析を確認。
- 内部状態も引き継ぐとする解析を確認。
- 純電断単独でのモード / 有利区間 / でんぶゾーンスルー回数の全項目を機種別に明示した一次資料は固定できず、一般論からの補完はしない。
- そのため純電断のモード / 有利区間 / スルー回数は `UNVERIFIED_AFTER_RESEARCH`。

### gameCounterReset
- 設定変更: ニャル目回数天井RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを確認。
- 本機の天井は固定ゲーム数ではなく「ニャル目累計160回」。液晶右側で累計回数を確認可能。

### ceilingAfterReset
- ニャル目160回のボーナス天井自体に設定変更専用短縮は確認できない。
- 一方、「でんぶゾーン」スルー天井は設定変更時のみ1回短縮。
- 通常: 4スルー後の次回ボーナス（5回目）でAT確定。
- 設定変更時: 3スルー後の次回ボーナス（4回目）でAT確定。

### modeAfterReset
- 設定変更: モードRESET。
- 据え置き: モードCARRY_OVER。
- 設定変更専用の公開モード振り分け数値は、機種名 / 正式型式 / EXCITE / ニューギンと「設定変更 / リセット / 朝一 / モード / モード振り分け」を組み替えて再探索したが固定できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVERを確認。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON単独の機種別直接契約は `UNVERIFIED_AFTER_RESEARCH`。
- 稼働中はAT終了時の一部で有利区間をリセット。AT終了画面で襖が閉まればリセット濃厚。

### resetBenefits
- 設定変更時は「でんぶゾーン」スルー回数天井が1回短縮。
- 通常4スルー→次回ボーナスでAT確定に対し、設定変更時は3スルー→次回ボーナスでAT確定。
- 朝一専用のAT直撃率・ボーナス初当たり優遇率・ニャル目天井短縮率などの追加公開数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetPenalties
- 前日のニャル目回数天井進行、内部状態、モード、でんぶゾーンスルー回数を失う。
- 設定変更専用の追加ペナルティ抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- なな徹ではリセット判別は「調査中」。
- 本機固有のガックン条件 / 発生率は `パチスロ這いよれ！ニャル子さん / Sハイヨレ!ニャルコサンY / EXCITE / ニューギン / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / ガックン / リールガックン` を組み替えて、業界記事・解析サイト・旧DB・回顧資料まで再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。
- ニャル目累計表示や前日のスルー履歴は据え置き推測の補助材料になり得るが、単独で設定変更を確定する契約は確認できない。
- 有利区間ランプ単独の設定変更判別契約も直接資料を固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常時でんぶゾーンスルー天井: 4スルー後の次回ボーナス（5回目）でAT確定。
- 設定変更時でんぶゾーンスルー天井: 3スルー後の次回ボーナス（4回目）でAT確定。
- ニャル目回数天井: 160回（設定変更でも固定短縮確認なし）。

### publicMorningNumbers
- 設定変更時のでんぶゾーンスルー天井: 3スルー後、次回ボーナスでAT確定。
- 通常時との差: 1回短縮。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `パチスロ這いよれ！ニャル子さん / 這いよれニャル子さん / Sハイヨレ!ニャルコサンY / EXCITE / ニューギン` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 天井短縮 / モード / モード振り分け / ガックン / 有利区間` を組み替えて検索。
- EXCITE発表を伝える業界記事、P-WORLD、なな徹、一撃、必勝本、パチマガスロマガ、ちょんぼりすた、Pachiseven、旧DB / 新台カレンダーを横断。
- 最初の未発見だけでUNVERIFIEDにせず再探索した上で、inspectionCode・ガックン・純電断時の一部内部項目のみ未固定とした。

## sources
取得日: 2026-09-13

- P-WORLD / 遊技日本「AT終了後も続く期待感！パチスロ新台『パチスロ這いよれ！ニャル子さん』」: https://news.p-world.co.jp/articles/21970/nippon
  - 型式名、EXCITE発表、初当たり合算、AT確率、出玉率、ゲーム性。
- P-WORLD / 遊技通信「混沌ラブコメ パチスロに這いよる！」: https://news.p-world.co.jp/articles/21961/yugitsushin
  - 純増約2.7枚/G、AT30G、でんぶゾーン15G+α。
- SUNTAC「TRYSEM 新台データ速報」: https://suntac.jp/market/post3217/
  - 2022-12-05実導入群、正式型式。
- P-WORLD機種DB: https://www.p-world.co.jp/machine/database/9736
  - 設定別初当たり / AT / 機械割、32.6G/50枚、ニャル目160回天井。
- なな徹 総合: https://nana-press.com/kaiseki/machine/467/
  - 6.5号機、純増、32.6G/50枚、天井、朝一リンク。
- なな徹 朝一・設定変更: https://nana-press.com/kaiseki/machine/467/12784/
  - 設定変更 / 据え置き時の有利区間・天井・内部状態・モード、スルー天井短縮。
- なな徹 天井: https://nana-press.com/kaiseki/machine/467/12783/
  - ニャル目160回天井、通常スルー天井。
- なな徹 でんぶゾーン: https://nana-press.com/kaiseki/machine/467/12789/
  - 有利区間継続時の特殊抽選、終了画面襖判別。
- 一撃 天井 / 設定変更: https://1geki.jp/slot/s_nyaruko/3/
  - 通常4スルー / 設定変更3スルー後の次回ボーナスでAT確定。
- 一撃 総合: https://1geki.jp/slot/s_nyaruko/
  - スペック、這いよれBONUS約104枚、ニャル子さん劇場約52枚。
- 必勝本: https://p.hisshobon.jp/vpage/2501/2
  - AT30G、純増約2.7枚/G、ボーナス / でんぶゾーン構造。
- 必勝本 ボーナス詳細: https://p.hisshobon.jp/vpage/2501/4
  - 各擬似ボーナスのG数・平均獲得枚数。
- ちょんぼりすた: https://chonborista.com/slot/newgin-slot/175464/
  - 朝一リセット表、電源OFF→ON時の天井 / 内部状態引継ぎ、有利区間、スルー天井短縮。
- ぱちんこキュレーション: https://pachinko-curation.com/7529/
  - 型式、導入日、スペック、ベース。
- 遊技日本 検定通過記事: https://news.p-world.co.jp/articles/21689/nippon
  - `Sハイヨレ!ニャルコサンY` の検定通過確認。

## missingFields
- inspectionCode: 正式型式の検定通過は確認できたが、DBで使用する `2Sxxxx` 形式の検定番号は検索語・資料系統変更後も固定できず `UNVERIFIED_AFTER_RESEARCH`。
- purePowerCycleMode / purePowerCycleAdvantageousSection / purePowerCycleDembuSkipCount: `UNVERIFIED_AFTER_RESEARCH`。
- resetModeDistribution: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- gackunDetection: `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- manufacturer表記は業界発表・型式申請主体でEXCITE、一般機種DBではニューギン表記も多い。本レコードは `EXCITE（ニューギングループ）` をcanonicalとし、ニューギン表記を別名義として扱う。
- 50枚ベースは32.6Gと約33Gの表記差があるが、丸め差として32.6Gをcanonical採用。
- ニャル目20回目のCZ / ボーナス当選率は約47% / 約48%の資料差があるが、朝一専用値ではないため物差しコアには丸め差として保持し、resetBehaviorには使用しない。

coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_SHORTENED_DENDU_ZONE_SKIP_CEILING
confidence: HIGH core / HIGH reset core / HIGH reset ceiling-shortening / inspectionCode & gackun & some pure-power-cycle fields UNVERIFIED_AFTER_RESEARCH
