# パチスロ モンスターハンターワールド：アイスボーン™

recordNo: 1546
machineName: パチスロ モンスターハンターワールド：アイスボーン™
manufacturer: エンターライズ製造 / フィールズ販売
formalModel: S MHWアイスボーンZF
inspectionCode: 2S1204
releaseDate: 2023-01-30
generation: 6.5号機 / メダル機
systemType: AT / CZ経由・狩猟BONUS連続型

## payoutRateBySetting
- 設定1: 98.2%
- 設定2: 99.4%
- 設定3: 101.6%
- 設定4: 105.2%
- 設定5: 109.6%
- 設定6: 113.5%

信頼度: INDUSTRY + ANALYSIS_HIGH / FINAL_ZF_MULTI_SOURCE_MATCH

## initialHitBySetting
### AT（狩猟BONUS）初当たり
- 設定1: 1/371.2
- 設定2: 1/360.1
- 設定3: 1/348.4
- 設定4: 1/318.5
- 設定5: 1/289.9
- 設定6: 1/267.8

### CZ合算
- 設定1: 1/124.9
- 設定2: 1/119.7
- 設定3: 1/115.1
- 設定4: 1/104.7
- 設定5: 1/101.8
- 設定6: 1/94.7

信頼度: INDUSTRY + ANALYSIS_HIGH / FINAL_ZF_MULTI_SOURCE_MATCH

## baseGamesPer50
- 約39G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- 狩猟BONUS: 約2.8枚/G。

信頼度: INDUSTRY + ANALYSIS_HIGH

## basicPayout
- 青7BONUS: 60G+α。
- 赤7BONUS: 40G or 50G+α。
- BAR BONUS: 25G+α。
- ボーナス中はモンスター討伐成功で剥ぎ取りチャンスへ移行し、成功時に次BONUSをストックする討伐LOOP型。
- ムフェト・ジーヴァBONUS: 平均ストック約6.6個、期待値約2200枚とする業界試打資料あり。

信頼度: INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時はレア役等からCZを抽選。主要CZはクエスト / アイルーBINGO / セリエナ防衛戦。
- 通常時最大999G+αでBONUS（AT）に当選。
- BAR揃いBONUS単発後は約33%で次回天井128G+αへの短縮抽選がある解析。これは設定変更専用ではなく通常運用上の別契約として保持。
- 有利区間は6.5号機上限4000G。設定変更時およびボーナス終了時の一部でリセットされる解析あり。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_BEHAVIOR_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井までの内部ゲーム数、クエストモード、内部状態、ぷちBINGO進行をRESET。
- RESET後はAT終了後に近い朝一契約となり、高確スタート濃厚。
- 初回クエスト成功時は青7BONUSが優遇される。
- 設定変更後1G目にレア小役が成立するとBONUS直撃 / AT突入。
- ステージ表示は「前線拠点セリエナ」から開始。

### carryOverBehavior
- 据え置き時は有利区間、天井までのゲーム数、内部状態、クエストモード、ぷちBINGO進行をCARRY_OVER。
- 表示ステージは設定変更時と同様に「前線拠点セリエナ」から開始するため、開始ステージだけでは変更判別不可。

### powerCycleBehavior
- 純電源OFF→ONのみでは天井までのゲーム数、内部状態、クエストモード、有利区間をCARRY_OVERする複数解析で一致。
- ぷちBINGOは「内部引継ぎ」とする解析あり。
- 表示ステージは「前線拠点セリエナ」に戻るとする解析。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常天井: 最大999G+αでBONUS。

### ceilingAfterReset
- 設定変更時は前日天井進行をRESET。
- 設定変更専用の固定短縮天井は、機種名 / 型式 / 朝一 / リセット / 天井短縮を組み替え、攻略・当時資料を横断したが確認できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- BAR BONUS単発後の約33%で128G+αへ短縮する契約は存在するが、設定変更専用恩恵ではないため別管理。

### modeAfterReset
- 設定変更: クエストモードRESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更専用のクエストモード振り分け公開値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 既存内部状態をRESETしたうえで高確スタート濃厚。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 高確開始後は転落契機（1枚役/ハズレ）から転落抽選が行われるため、固定ゲーム数保証とは扱わない。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 有利区間ランプによる設定変更 / 据え置き判別は不可。

### resetBenefits
- 設定変更後は高確スタート濃厚。
- 設定変更後の初回クエスト成功時は青7BONUS優遇。
- 設定変更後1G目にレア小役成立でBONUS直撃 / AT突入。
- 以上はAT終了後に近い恩恵として複数解析で一致。

### resetPenalties
- 設定変更により前日の天井ゲーム数、内部状態、クエストモード、ぷちBINGO進行を失う。
- 設定変更専用の追加不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更後 / 据え置き後とも「前線拠点セリエナ」開始で、見た目による判別は不可と解析が明記。
- 有利区間ランプでも判別不可。
- 本機固有のリールガックン条件 / 発生率は `モンハンアイスボーン / S MHWアイスボーンZF / 2S1204 / エンターライズ` と `ガックン / 朝一 / リセット判別 / 設定変更` を組み替え、当時攻略・旧DB・回顧資料まで再探索したが直接固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 設定変更後1G目: レア小役成立でBONUS直撃 / AT突入。
- 通常時レア役合算: 設定1 1/29.90、設定2 1/29.57、設定3 1/29.31、設定4 1/28.90、設定5 1/28.72、設定6 1/27.63。これは一般小役確率であり「朝一専用当選率」ではないが、1G目直撃条件の構成要素として保持。
- 設定変更後: 高確スタート濃厚。
- 初回クエスト成功時: 青7BONUS優遇。
- 通常天井: 999G+α。
- BAR BONUS単発後: 約33%で128G+α天井短縮（設定変更専用ではない）。

### publicMorningNumbers
- 設定変更後1G目のレア小役成立: BONUS直撃 / AT突入。
- レア役合算の公開値: 1/29.90〜1/27.63（設定1〜6）。専用リセット確率として再計算せず元値を保持。
- 設定変更後の高確スタートについて、固定保証G数は確認できず `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用クエストモード振り分け / 初回クエスト青7の具体率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得 / 再探索日: 2026-09-13。
- `パチスロ モンスターハンターワールド：アイスボーン / モンハンアイスボーン / S MHWアイスボーンZF / 2S1204 / エンターライズ` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / クエストモード / 高確 / ぷちBINGO / 有利区間 / ガックン` を組み替えて検索。
- なな徹、一撃、パチ＆スロ必勝本、ちょんぼりすた、当時の業界発表、公安委員会検定通過情報を横断。
- 初期ティザー型式 `S MHWアイスボーンZD` の事前スペックは最終市場型式 `ZF` と混同せずconflictsへ隔離。

## conflicts
- **型式差**: 2022-10初期ティザー / 開発段階資料は `S MHWアイスボーンZD`。2022-10-24東京都公安委員会検定通過および最終販売発表は `S MHWアイスボーンZF`、検定番号 `2S1204`。市場導入個体のcanonicalはZFとし、ZDは `CONFLICT_PRERELEASE_MODEL` として保持。
- **事前スペック差**: ZD期の一部事前資料では設定5/6の出玉率107.5% / 110.1%、AT初当たり1/304.4 / 1/289.5、CZ設定5/6 1/101.1 / 1/96.4。最終ZFの業界発表・解析複数は出玉率109.6% / 113.5%、AT 1/289.9 / 1/267.8、CZ 1/101.8 / 1/94.7で一致。平均せずZF最終値をcanonical、ZD値を `CONFLICT_PRERELEASE_SPEC` とする。
- **青7表現差**: 設定変更後初回クエスト成功について「青7優遇」とするなな徹に対し、「青7濃厚」とする攻略整理資料あり。確定率を示す一次解析値を固定できないため、canonical表現は保守的に「優遇」とし、具体率は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

## sources
取得日: 2026-09-13

- PiDEA 東京都公安委員会検定通過（2022-10-24）: https://pidea.jp/articles/1666664814
  - 最終型式 `S MHWアイスボーンZF`、検定番号 `2S1204`、エンターライズ。
- G-net 大阪府検定切れ一覧: https://g-net-ps.com/content/kenteikire-2025-10-2/
  - `S MHWアイスボーンZF / 2S1204` の別系統照合。
- 遊技日本 / P-WORLD業界ニュース 最終販売発表: https://news.p-world.co.jp/articles/22545/nippon
  - ZF、設定別CZ/AT/出玉率、純増約2.8枚/G、青7 60G+α / 赤7 40or50G+α / BAR25G+α、2023-01-30導入予定。
- Amusement Japan / P-WORLD: https://news.p-world.co.jp/articles/22170/amusement
  - エンターライズ製、ゲームフロー、純増約2.8枚/G。
- 遊技通信 / P-WORLD: https://news.p-world.co.jp/articles/22166/yugitsushin
  - 2023年1月下旬導入予定、狩猟BONUS構造。
- 遊技日本 初期ティザー: https://news.p-world.co.jp/articles/21805/nippon
  - 初期型式 `S MHWアイスボーンZD`。prerelease conflict根拠。
- ぱちんこキュレーション: https://pachinko-curation.com/34060/
  - ZD期事前スペック差、約39G/50枚、2023-01-30/地域差2-6掲載。
- 一撃 機種TOP: https://1geki.jp/slot/s_mhwib/
- 一撃 スペック: https://1geki.jp/slot/s_mhwib/1/
  - 最終AT初当たり。
- 一撃 小役/ベース: https://1geki.jp/slot/s_mhwib/4/
  - 約39G/50枚、レア役合算1/29.90〜1/27.63。
- 一撃 天井: https://1geki.jp/slot/s_mhwib/3/
  - 最大999G+α、BAR単発後の128G短縮。
- なな徹 朝一/設定変更: https://nana-press.com/kaiseki/machine/474/13161/
  - 設定変更/据え置きの有利区間・天井・内部状態・クエストモード・ぷちBINGO、朝一高確、初回クエスト青7優遇、1G目レア役直撃、判別不可。
- ちょんぼりすた: https://chonborista.com/slot/enta-slot/176052/
  - 設定変更/電源OFF→ONの天井・内部状態、朝一恩恵、有利区間整理。
- ぽこすろっと: https://www.nankaikoya.jp/monsterhunter-iceborne-kitaichi/
  - 設定変更/電源OFF→ONの天井・クエストモード・状態・ぷちBINGO・有利区間契約、朝一恩恵。
- パチ＆スロ必勝本 有利区間: https://p.hisshobon.jp/machine/4004/1/93249
  - 設定変更時・ボーナス終了時一部で有利区間RESET。

## status
coreStatus: COMPLETE_CORE
resetBehaviorQA: COMPLETE_RESET_CORE_WITH_PUBLIC_MORNING_BEHAVIOR_AND_GACKUN_UNVERIFIED_AFTER_RESEARCH
confidence: INDUSTRY identity/final spec + ANALYSIS_HIGH reset core + MULTI_SOURCE_MATCH; gackun UNVERIFIED_AFTER_RESEARCH; prerelease ZD isolated as CONFLICT