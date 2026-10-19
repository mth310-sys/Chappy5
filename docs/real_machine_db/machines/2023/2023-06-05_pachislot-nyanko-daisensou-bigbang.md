# ぱちスロ にゃんこ大戦争 BIGBANG

recordNo: 1567
machineName: ぱちスロ にゃんこ大戦争 BIGBANG
manufacturer: オッケー．（KYORAKUブランド / 京楽産業．グループ）
formalModel: Lパチスロにゃんこ大戦争MK
inspectionCode: 3S0209
releaseDate: 2023-06-05
generation: 6.5号機 / スマスロ
systemType: AT / ゲーム数上乗せ型 / CZ経由あり
settings: 1 / 2 / 4 / 5 / 6（実質5段階。別途設定0あり）

## payoutRateBySetting
- 設定1: 97.6%
- 設定2: 98.5%
- 設定4: 102.6%
- 設定5: 107.5%
- 設定6: 112.5%

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## initialHitBySetting
### AT「BIGBANG GAME」初当り
- 設定1: 1/587.0
- 設定2: 1/573.5
- 設定4: 1/504.4
- 設定5: 1/447.6
- 設定6: 1/417.6

### CZ「大狂乱のネコ島」出現率
- 設定1: 1/1142.7
- 設定2: 1/1211.3
- 設定4: 1/1106.5
- 設定5: 1/831.1
- 設定6: 1/843.0

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## baseGamesPer50
- 約29.7G/50枚。

信頼度: ANALYSIS_HIGH / MULTI_SOURCE_MATCH

## netIncrease
- AT「BIGBANG GAME」: 約2.7枚/G。
- 上位「プレミアムBIGBANG GAME」も基本純増約2.7枚/G系統。

信頼度: OFFICIAL + ANALYSIS_HIGH

## basicPayout
- AT「BIGBANG GAME」はゲーム数上乗せ型。
- AT初当り時は「究極降臨ガチャ」で初期G数を決定し、平均約150G上乗せが目安として公開。
- 「プレミアムBIGBANG GAME」はBIGBANG図柄揃い（1/8192）またはエンディング後のPBGC経由などから突入。
- メーカー公表のプレミアムBIGBANG GAME期待値は2500枚over（通常遊技に戻るまでの平均差枚）。
- プレミアムBIGBANG GAMEはBIGBANGステージ100G後、覚醒成功で1セット30Gの「神さま炎撫」ループへ移行する構造。

信頼度: OFFICIAL + INDUSTRY + ANALYSIS_HIGH

## modeSpecificMinimumData
- 通常時は液晶赤図柄揃い、CZ、確定役などからATを目指す。
- 通常天井は1500G+αでAT当選＋究極降臨ガチャ振り分け優遇。
- AT終了後の一部では222G+α天井が選択される。
- CZ「大狂乱のネコ島」は期待度約40%。
- 設定0は通常営業用の性能設定とは分けて扱う。解析資料では下パネル消灯＋STOPボタン緑点灯が判別要素として公開されている。

## resetBehavior
schemaVersion: v0.7
resetQaStatus: COMPLETE_RESET_CORE_WITH_PUBLIC_SHORTENED_CEILING
resetQaLastUpdated: 2026-09-13

### settingChangeBehavior
- 設定変更時は有利区間RESET。
- 天井ゲーム数RESET。
- 内部モードRESET / 再抽選。
- 内部状態（狂乱状態を含む）RESET / 再抽選。
- 液晶ステージはワルキューレ平原、液晶出目は1・2・3、ゲーム数表示は「あしあと」アイコン、小役履歴は7G間シャッター状態から開始。
- 設定変更後は通常1500G+αの天井が1122G+αへ短縮される。

### carryOverBehavior
- 据え置き時は有利区間CARRY_OVER。
- 天井ゲーム数CARRY_OVER。
- 内部モードCARRY_OVER。
- 内部状態CARRY_OVER。
- 朝一液晶は設定変更時と同様にワルキューレ平原 / 1・2・3表示となるため、見た目だけでは変更判別できない。

### powerCycleBehavior
- 純電源OFF→ONのみでは天井までの内部ゲーム数をCARRY_OVER。
- モードCARRY_OVER。
- 狂乱状態CARRY_OVER。
- ゲーム数表示は「あしあと」へ戻るが、内部消化ゲーム数は引き継ぐ。
- 小役履歴は7G間シャッター状態、液晶出目は1・2・3、ステージはワルキューレ平原へ戻る。
- 純電断単独の有利区間内部契約について、高信頼資料で「有利区間」という語を用いた直接記述は固定できなかったため、その点だけは `UNVERIFIED_AFTER_RESEARCH`。天井・モード・狂乱状態の引継ぎは機種固有比較資料で確認済み。

### gameCounterReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 通常天井: 1500G+α。
- 設定変更後天井: 1122G+α。
- AT終了後の一部: 222G+α。

### ceilingAfterReset
- 設定変更後は1500G+α → 1122G+αへ確定短縮。
- 1122G+α到達時はAT当選＋究極降臨ガチャ振り分け優遇。
- これは本機の明確な朝一リセット恩恵として保存する。

### modeAfterReset
- 設定変更: RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更専用の内部モード振り分け数値は、機種名・正式型式・メーカー名と「設定変更 / リセット / 朝一 / モード振り分け / 天国」等を組み替えて再探索したが `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### stateAfterReset
- 設定変更: 狂乱状態を含む内部状態RESET / 再抽選。
- 据え置き: CARRY_OVER。
- 純電源OFF→ON: CARRY_OVER。
- 設定変更専用の狂乱状態初期振り分け数値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### advantageousSectionReset
- 設定変更: RESET。
- 据え置き: CARRY_OVER。
- 有利区間ランプによる設定変更/据え置き判別は不可。
- 純電源OFF→ON単独については、天井・モード・狂乱状態は引継ぎを確認したが、有利区間そのものを直接明記した機種固有資料は `UNVERIFIED_AFTER_RESEARCH`。

### resetBenefits
- 最大の公開恩恵は天井が1500G+αから1122G+αへ短縮されること。
- 短縮天井到達時もAT当選＋究極降臨ガチャ振り分け優遇を受ける。
- なな徹は設定変更後の朝一期待値を「100%オーバー」と公開しているが、交換率・前提条件を固定した単一の精密数値ではないため定性的参考値として保持する。

### resetPenalties
- 設定変更で前日の天井進行・内部モード・内部状態を失う。
- 前日深いハマリや上位内部状態を引き継ぐ据え置きメリットは消える。
- 1122G短縮以外の設定変更専用不利抽選は `NONE_CONFIRMED_AFTER_RESEARCH`。

### resetDetection
- 設定変更・据え置きとも朝一液晶出目は1・2・3、ステージはワルキューレ平原となるため、外見だけでは判別不可。
- 有利区間ランプによる判別不可。
- 朝一1122G+αを消化しても天井が発動しなければ、据え置き濃厚材料となる。
- 据え置き時は前日ゲーム数を引き継ぐため、前日ハマリ＋当日進行と天井挙動は判別材料になり得る。
- 本機固有のリールガックン条件/発生率は「ぱちスロ にゃんこ大戦争 BIGBANG / Lパチスロにゃんこ大戦争MK / オッケー / 京楽」と「ガックン / リール始動 / 設定変更 / 据え置き / 朝一」を組み替えて再探索したが固定できず `UNVERIFIED_AFTER_RESEARCH`。

### numericResetData
- 通常天井: 1500G+α。
- 設定変更後天井: 1122G+α。
- AT終了後の一部: 222G+α。
- 天井恩恵: AT当選＋究極降臨ガチャ振り分け優遇。
- 設定変更専用モード振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。
- 設定変更専用狂乱状態振り分け: `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### publicMorningNumbers
- 設定変更後の最大天井: **1122G+α**。
- 通常時最大天井: **1500G+α**との比較で378G短縮。
- なな徹公開表現: 設定変更後は「期待値100%オーバー」。精密な期待収支値ではないため、朝一客行動の定性指標としてのみ保存。
- 朝一専用のAT初当り率・CZ率・モード振り分けの公開固定値は `PUBLIC_VALUE_NOT_FOUND_AFTER_RESEARCH`。

### resetBehavior 再探索メモ
- 取得/再探索日: 2026-09-13。
- `ぱちスロ にゃんこ大戦争 BIGBANG / Lにゃんこ大戦争 / Lパチスロにゃんこ大戦争MK / オッケー / 京楽` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井短縮 / モード / 狂乱状態 / ガックン / 有利区間` を組み替えて検索。
- メーカー公式、権利元公式、公安委員会検定系業界記事、P-WORLD/遊技日本、グリーンべると、ハズセ、一撃、なな徹、パチ＆スロ必勝本、パチマガスロマガ、スロパチクエスト、K-Navi、旧DB/回顧系資料を横断。
- 純電断時の天井・モード・狂乱状態引継ぎは機種固有比較資料で確認。
- ガックン、設定変更専用モード/狂乱状態振り分け、純電断単独の有利区間直接記述は十分な再探索後も固定できず一般論で補完しない。

## sources
取得日: 2026-09-13

### 公式 / 権利元
- KYORAKU公式 全国導入開始: https://www.kyoraku.co.jp/news/detail/688
- ポノス公式 全国導入開始: https://www.ponos.jp/news/2023/05/10nyanko-5/
- ポノス / PR TIMES: https://prtimes.jp/main/html/rd/p/000000455.000036495.html

### 公的 / 業界
- 遊技通信web 東京都公安委員会検定通過（型式・検定番号）: https://www.yugitsushin.jp/news/%E6%9D%B1%E4%BA%AC%E9%83%BD%E5%85%AC%E5%AE%89%E5%A7%94%E5%93%A1%E4%BC%9A%E6%A4%9C%E5%AE%9A%E9%80%9A%E9%81%8E%E7%8A%B6%E6%B3%81%EF%BC%884%E6%9C%8824%E6%97%A5%EF%BC%89/
- P-BOMB 和歌山県公安委員会検定通過: https://p-bomb.co.jp/industry/new-machine/6791/
- グリーンべると 検定通過: https://web-greenbelt.jp/post-71330/
- P-WORLD / 遊技日本 発売記事: https://news.p-world.co.jp/articles/24046/nippon
- G-net 検定切れ一覧（型式・検定番号）: https://g-net-ps.com/content/%E3%81%B1%E3%81%A1%E3%82%93%E3%81%93%E3%83%BB%E3%82%B9%E3%83%AD%E3%83%83%E3%83%88%E6%A4%9C%E5%AE%9A%E5%88%87%E3%82%8C%E6%83%85%E5%A0%B1%EF%BC%882026%E5%B9%B44%E6%9C%88%EF%BC%89/
- PiDEA X 新台講座: https://pidea.jp/articles/1684302590

### 解析 / 攻略
- ハズセ: https://hazuse.com/machine/pachislot/3S0209/
- 一撃 機種解析: https://1geki.jp/slot/l_nyanko/
- 一撃 天井/朝一: https://1geki.jp/slot/l_nyanko/3/
- なな徹 機種解析: https://nana-press.com/kaiseki/machine/563/
- なな徹 朝一/有利区間: https://nana-press.com/kaiseki/machine/563/15311/
- なな徹 天井: https://nana-press.com/kaiseki/machine/563/15309/
- なな徹 設定差: https://nana-press.com/kaiseki/machine/563/15307/
- なな徹 基本数値: https://nana-press.com/kaiseki/machine/563/15033/
- パチ＆スロ必勝本 スペック/天井/電源OFF ON: https://p.hisshobon.jp/vpage/2538/2
- パチマガスロマガ ボーナス確率・機械割: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kyoraku_slot/14/kh02-1.php
- スロパチクエスト: https://www.slopachi-quest.com/article/nyankodaisensou-settei/
- K-Navi: https://p-kn.com/slot/3969/
- パチセブン 天井解説: https://pachiseven.jp/articles/detail/18306
- ぱちんこキュレーション: https://pachinko-curation.com/37977/

## missingFields
- 本機固有リールガックン条件/発生率。
- 設定変更専用の内部モード振り分け数値。
- 設定変更専用の狂乱状態初期振り分け数値。
- 純電源OFF→ON単独時の有利区間内部契約を「有利区間」と明記した直接資料。
- 朝一専用のAT/CZ初当り率の公開固定値。

## conflicts
- メーカー表記は、販売/ブランド資料では京楽産業．とされる一方、公安委員会検定型式の製造業者はオッケー．。本DBではmanufacturerを検定上の製造業者「オッケー．」とし、KYORAKUブランド/京楽産業．グループを併記する。これは数値CONFLICTではなく役割差。
- ベースは約29.7G/50枚と約30G/50枚の丸め表記差があるが、同一値の丸め差として扱う。
- 現時点で主要性能値に重大な数値CONFLICTは確認なし。

coreStatus: COMPLETE_CORE
qaResetBehavior: COMPLETE_RESET_CORE_WITH_PUBLIC_SHORTENED_CEILING
