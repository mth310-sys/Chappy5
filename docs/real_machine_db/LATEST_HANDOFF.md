# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- 正本は `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` の v0.7。
- 新規機種では性能コア + `resetBehavior` を同時収集する。
- 前回LATEST_HANDOFF基準94件。
- 今回 `トレジャーパイレーツ`（2007-03-11納品予定）を新規登録し、**LATEST_HANDOFF基準95件**。
- 遡及QAでは `サクラ大戦S2` を更新。既存の50枚ベース欠損を補完し、REG非搭載という誤記を訂正、v0.7 resetBehaviorを追加した。
- 次の明確な未処理候補は `革命戦士長州力`（2007-03-19納品予定）。

## 今回追加

### `machines/2007-03-11_treasure-pirates.md`

- トレジャーパイレーツ / KPE。
- 2007年2月2日のグリーンべると/P-WORLD業界記事で、3月11日納品開始予定を確認。
- 赤7後100G、青7後50Gの完走型RT「トレジャーチャンス」。RT純増約+0.6枚/G。
- 旧パチマガ解析: 赤7 1/451.97〜1/402.06、青7 1/485.45〜1/344.93、合算1/234.06〜1/185.65。
- 機械割は旧パチマガ 96.3〜111.5% と5号機クロニクル 96.7〜106.4% が競合するため CONFLICT。
- 1000円ベースは旧パチマガ31.48〜32.48P、当時業界発表は平均34〜35G。定義/算出条件差を疑い平均せず CONFLICT。
- BIG純増は旧パチマガ約204枚、当時業界記事約174枚で差があり、RT込み期待値（赤約250枚/青約200枚）とは定義を分けて保持。
- resetBehaviorは設定変更/据え置き/電源OFF→ON/朝一/ガックン/天井/モード/RTまで検索語を変えて再探索したが、RT中の変更/電断処理や本機固有の変更判別は高信頼資料未確認のため該当項目のみUNVERIFIED。
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL

## 遡及QA修正

### `machines/2005-10_sakura-taisen-s2.md`

- 旧パチマガスロマガの小役解析ページから1000円あたり設定1 43.58P / 設定6 44.19Pを発見し、baseGamesPer50欠損を補完。
- 既存レコードの「REG非搭載」は誤り。旧パチマガ解析にREG設定1 1/873.81、設定6 1/819.20、基本システムにREG約96枚が残っているため訂正。
- BIGは1/334.37〜1/282.48、合算1/241.83〜1/210.05。
- S-BIG約370枚、N-BIG約275枚、REG約96枚。
- v0.7 resetBehaviorを追加。RT/ATなし、通常時天井/モード管理は確認できないが、本機固有の設定変更/電源OFF→ON/ガックン情報は高信頼資料未確認のため resetBehaviorQA は PARTIAL。
- coreStatusは QA修正により COMPLETE_CORE とした。

## 2007年3月 進行状況

既登録/処理済み:
- パチスロ暴れん坊将軍（2007-03-04）: 既登録
- ガオガオフェスティバルS（2007-03-04）: 登録済み
- トレジャーパイレーツ（2007-03-11） ← 今回追加

次の未処理/境界候補:
- 革命戦士長州力（2007-03-19納品予定）
- バトルシーザーXXX: 2007年2月発表、3月導入境界を要確認
- お江戸大捜査線: 2007年2月発表、3月導入境界を要確認

## 次回再開地点

**2007年3月の次の未処理機種 `革命戦士長州力`（2007-03-19納品予定）から継続する。グリーンべるとでノーマルA、BB約312枚、CB約183枚、合算1/190〜1/159、1000円37〜38Gまで確認済み。次回は設定別BB/CB確率、機械割の別系統資料照合、resetBehaviorを十分再探索してレコード化する。その後 `バトルシーザーXXX`、`お江戸大捜査線` の導入境界を監査する。遡及resetBehavior QAも古い未処理機から並行継続する。**

### 次回優先検索

- 革命戦士長州力 / 2007-03-19 / BB / CB / 合算 / 機械割 / 50枚 / 1000円 / 設定変更 / リセット / 朝一 / ガックン
- バトルシーザーXXX / 導入 / 納品 / 2007年3月 / 機械割 / ボーナス / リセット
- お江戸大捜査線 / 導入 / 納品 / 2007年3月 / 機械割 / ボーナス / リセット

## 今回の主要資料

### トレジャーパイレーツ
- グリーンべると — https://web-greenbelt.jp/00004042/
- P-WORLD業界ニュース — https://news.p-world.co.jp/articles/2026/greenbelt
- パチマガスロマガ ボーナス/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/03/h.php
- パチマガスロマガ 小役/1000円プレイ数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/03/c.php
- パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/03/a.php
- P-WORLD機種DB — https://www.p-world.co.jp/machine/database/4581
- 5号機クロニクル KPE一覧 — https://5goki.com/kpe

### サクラ大戦S2 遡及QA
- パチマガスロマガ 設定推測 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/55/e.php
- パチマガスロマガ 基本システム — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/55/a.php
- パチマガスロマガ 小役/1000円プレイ数 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/eleco_slot/55/c.php
- グリーンべると — https://web-greenbelt.jp/00005251/
- パチマガスロマガFREE 回顧 — https://pachimaga.com/free/special/5f9945d7f3fa87318ca147a545efea04f53261a2.php

### 次候補
- グリーンべると 革命戦士長州力 — https://web-greenbelt.jp/00003995/
