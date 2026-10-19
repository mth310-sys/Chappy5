# Lバキ 強くなりたくば喰らえ!!!

recordNo: 1534
machineName: Lバキ 強くなりたくば喰らえ!!!
manufacturer: オリンピア / 平和
formalModel: LバキL3
inspectionCode: UNVERIFIED_AFTER_RESEARCH
releaseDate: 2022-11-21
generation: 6.5号機 / スマートパチスロ初期 / コンプリート機能搭載
systemType: AT / CZ→AT / 上位AT搭載

## payoutRateBySetting
- 設定1: 97.5%
- 設定2: 98.6%
- 設定3: 101.2%
- 設定4: 103.8%
- 設定5: 106.8%
- 設定6: 110.4%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH_WITH_ONE_CONFLICT

## initialHitBySetting
### CZ「解放のカタルシス」
- 設定1: 1/218.2
- 設定2: 1/208.8
- 設定3: 1/206.5
- 設定4: 1/198.4
- 設定5: 1/196.1
- 設定6: 1/191.0

### AT「オーガバトルボーナス」
- 設定1: 1/355.6
- 設定2: 1/342.2
- 設定3: 1/331.4
- 設定4: 1/318.3
- 設定5: 1/306.4
- 設定6: 1/299.2

信頼度: OFFICIAL_INDUSTRY / ANALYSIS_HIGH

## baseGamesPer50
- 約33.6G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「オーガバトルボーナス」: 約2.3枚/G。
- 上位AT「バキバキアルティメット」: 約4.0枚/G。

信頼度: OFFICIAL_INDUSTRY / ANALYSIS_HIGH

## basicPayout
- CZ「解放のカタルシス」: 自力格上げ型、成功期待度約60%。
- AT「オーガバトルボーナス」: 1セット20〜100Gのメインパート + 5G or 6Gのバトルパート。ループ率 + Vストック管理。
- バトル20勝以上で最強CZ「強喰」を獲得。10勝時も獲得チャンスあり。
- 最強CZ「強喰」: 32G、自力択当て、成功期待度60%以上。
- 上位AT「バキバキアルティメット」: 純増約4.0枚/G、Vストック5個以上 + 高ループ。

信頼度: INDUSTRY_HIGH / ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は規定G数、力みカウンター、範馬メーターのトリプル抽選でCZを目指す。
- 通常ゲーム数天井: 最大600G+αでCZ「解放のカタルシス」。
- CZスルー天井: CZ3連続失敗後、4回目CZでAT当選。
- 通常モードは通常A/B/C、天国A/B、強喰準備など。設定変更時は専用「設定変更モード」。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN_AND_INSPECTION_CODE
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井RESET。
- 内部状態RESET。
- 専用「設定変更モード」へ移行。
- 範馬メーターを内部再セット。画面上は非点灯から開始。
- エンドルフィンポイントを再セット。
- 液晶ゲーム数は0G。
- 開始ステージは市街地ステージ。

### carryOverBehavior
- 据え置き時は天井ゲーム数・内部状態・内部モード・範馬メーター等を内部CARRY_OVERとする解析を確認。
- 朝一液晶ゲーム数は0G表示、範馬メーターも見た目は非点灯のため、表示だけでは内部引継ぎを直接確認できない。

### powerCycleBehavior
- 純電源OFF→ONでは有利区間CARRY_OVER。
- 天井CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 範馬メーター内部CARRY_OVERだが見た目は非点灯。
- エンドルフィンポイントCARRY_OVER。
- 液晶ゲーム数は0G表示だが内部ゲーム数は引継ぎ。
- 開始ステージは市街地ステージ。

### gameCounterReset
- 設定変更: RESET、0Gから再計算。
- 据え置き: CARRY_OVER。
- 純電断: CARRY_OVER。ただし液晶表示は0G。
- 通常最大天井は600G+αでCZ。
- CZ3スルー後の4回目CZはAT濃厚。

### ceilingAfterReset
- 設定変更専用モード自体の最大規定G数は600G+αで、最大天井そのものの短縮はなし。
- ただし規定G数振り分けが大幅に優遇され、100G+α選択が48.8%、300G+αまで累計76.5%。
- 「固定短縮天井」ではなく「朝一専用モードによる早期CZ振り分け」として扱う。

### modeAfterReset
- 設定変更時は専用「設定変更モード」。
- 設定変更モードの規定G数振り分け:
  - 1〜47G: 0%
  - 48〜99G: 1.2%
  - 100G+α: 48.8%
  - 200G+α: 15.2%
  - 300G+α: 11.3%
  - 400G+α: 8.6%
  - 500G+α: 6.3%
  - 600G+α: 8.6%
- 設定変更モード後のモード移行率:
  - 通常A: 16.0%
  - 通常B: 15.6%
  - 通常C: 1.6%
  - 天国A: 66.4%
  - 天国B: 0.4%
  - 強喰準備: 0%

### stateAfterReset
- 設定変更: 内部状態RESET。
- 据え置き: CARRY_OVER。
- 純電断: CARRY_OVER。
- 範馬メーター高確等の詳細状態は通常抽選の完全再現に不要なため、朝一比較に必要な範囲のみ保持。

### advantageousSectionReset
- 設定変更: 有利区間RESET。
- 据え置き/純電断: CARRY_OVER。
- 通常稼働中は「強喰」移行時が主要な有利区間リセット契機。
- スマスロのため有利区間ゲーム数上限は撤廃されている。

### resetBenefits
- 設定変更専用モードへ移行し、100G+αが48.8%、300G+αまで累計76.5%でCZ規定G数に到達。
- 設定変更モード後は66.4%で天国Aへ移行。天国Aは132G以内のCZ当選濃厚。
- 範馬メーター初期抽選を実施。非点灯50.0%、1個25.0%、2個18.4%、3個6.3%、4個0.4%。
- エンドルフィンポイントも初期抽選を実施し、高設定ほど高ポイント帯が優遇。

### resetPenalties
- 前日の天井進行・内部モード/状態・範馬メーター・エンドルフィンポイント蓄積を失う。
- 設定変更専用の追加不利要素は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更・据え置き/純電断とも液晶は0G、範馬メーターは見た目上非点灯、市街地ステージから始まるため、朝一外観だけでの判別は困難。
- 前日の範馬メーター点灯数を把握しておき、前日分との合計が5個相当になってもCZ抽選挙動が発生しなければ設定変更濃厚となるケースがある。
- 据え置きでは内部ゲーム数を引き継ぐため、CZ当選ゲーム数が補助判別材料になる場合がある。
- 本機固有のリールガックン条件・発生率は `Lバキ / LバキL3 / オリンピア / 平和 / 設定変更 / リセット / 朝一 / ガックン / リール` を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更モード規定G数: 48〜99G 1.2%、100G+α 48.8%、200G+α 15.2%、300G+α 11.3%、400G+α 8.6%、500G+α 6.3%、600G+α 8.6%。
- 100G+αまで累計: 50.0%。
- 300G+αまで累計: 76.5%。
- 設定変更モード後: 天国A 66.4%、天国B 0.4%、通常A 16.0%、通常B 15.6%、通常C 1.6%。
- 初期範馬メーター: 0個50.0%、1個25.0%、2個18.4%、3個6.3%、4個0.4%。
- 初期エンドルフィンポイント:
  - 設定1/2: 10〜30pt 64.1%、40〜60pt 32.0%、70〜90pt 3.9%。
  - 設定3: 59.4% / 36.3% / 4.3%。
  - 設定4: 51.2% / 43.4% / 5.5%。
  - 設定5: 41.4% / 52.3% / 6.3%。
  - 設定6: 33.2% / 60.2% / 6.6%。

### publicMorningNumbers
- 設定変更後、約50%で100G+前兆以内にCZ。
- 300G+αまでの規定G数選択率: 76.5%。
- 設定変更モード後の天国A移行率: 66.4%。
- 初期範馬メーター内部1個以上: 50.0%。
- 朝一見た目は液晶0G / 範馬メーター非点灯 / 市街地ステージ。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `Lバキ 強くなりたくば喰らえ!!! / スマスロ刃牙 / LバキL3 / オリンピア / 平和` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 電断 / 天井 / 設定変更モード / 範馬メーター / エンドルフィン / ガックン / 有利区間 / 判別` を組み替えて再探索。
- 平和発表を報じる業界一次系、遊技日本、グリーンべると、Amusement Japan、P-WORLD、一撃、なな徹、パチマガスロマガ、ちょんぼりすた等を横断。
- 型式 `LバキL3` は複数業界資料で一致。検定番号は公開検索で公的/業界一次の固定値を十分に確認できず `UNVERIFIED_AFTER_RESEARCH`。

## conflicts
- 設定3機械割は一撃・ちょんぼりすた・P-WORLD系等で101.2%が一致する一方、スロパチクエストに100.4%表記あり。平均せずcanonicalを101.2%、alternateを100.4%として `CONFLICT_SINGLE_SECONDARY_VS_MULTI_SOURCE` を保持。
- 導入日は多数の業界/解析資料で2022-11-21。一部発表記事に11/20予定表記があるが、スマスロ全国営業開始日は11/21であり、canonicalは2022-11-21。

## sources
取得日: 2026-09-13

1. 遊技日本 — スマスロ第1弾 Lバキ発表
   - https://news.p-world.co.jp/articles/21700/nippon
   - 型式LバキL3、製造元オリンピア、CZ/AT確率、純増、導入予定。
   - reliability: INDUSTRY_HIGH
2. グリーンべると — 11/21新台 Lバキ
   - https://news.p-world.co.jp/articles/22278/greenbelt
   - 2022-11-21実導入、AT/上位AT基本性能。
   - reliability: INDUSTRY_HIGH
3. Amusement Japan — スマートパチスロ販売正式決定
   - https://amusement-japan.co.jp/article/detail/10003024/
   - 11/21営業開始、型式LバキL3、オリンピア。
   - reliability: INDUSTRY_HIGH
4. 一撃 — Lバキ 強くなりたくば喰らえ!!!
   - https://1geki.jp/slot/s_baki_tk/
   - 設定別AT確率/機械割、33.6G/50枚、純増。
   - reliability: ANALYSIS_HIGH
5. なな徹 — 朝一・設定変更時の挙動/有利区間
   - https://nana-press.com/kaiseki/machine/461/12575/
   - 設定変更モード規定G数、モード移行率、朝一恩恵、判別。
   - reliability: ANALYSIS_HIGH
6. なな徹 — 通常時の抽選システム
   - https://nana-press.com/kaiseki/machine/461/12577/
   - 初期範馬メーター振り分け。
   - reliability: ANALYSIS_HIGH
7. パチマガスロマガ — 朝イチ・設定変更
   - https://cs62.cs-plaza.com/g/pachi/pla/s_conq/olympia_slot/154/kr01.php
   - 設定変更/電源OFF→ON時の有利区間、天井、内部モード、内部状態、表示挙動。
   - reliability: ANALYSIS_HIGH
8. ちょんぼりすた — Lバキ解析
   - https://chonborista.com/slot/orinpia-slot/175097/
   - 設定別CZ/AT/機械割、天井、設定変更モード、エンドルフィン初期値、有利区間。
   - reliability: ANALYSIS_HIGH
9. P-WORLD — Lバキ機種DB
   - https://www.p-world.co.jp/machine/database/9720
   - 天井、設定変更モード、有利区間、機種概要。
   - reliability: INDUSTRY_DATABASE / ANALYSIS
10. スロパチクエスト — 設定差まとめ
   - https://www.slopachi-quest.com/article/baki-tuyokunaritakubakurae-settei/
   - 設定3機械割100.4%の競合値。
   - reliability: ANALYSIS_SINGLE

## missingFields
- inspectionCode: `UNVERIFIED_AFTER_RESEARCH`。
- 本機固有リールガックン条件/発生率: `UNVERIFIED_AFTER_RESEARCH`。

## qualityStatus
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_UNVERIFIED_GACKUN_AND_INSPECTION_CODE
sourceAudit: MULTI_SOURCE
