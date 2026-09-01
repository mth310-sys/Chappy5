# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは253件地点 `ドキューン / PSドキューンGB（2008-05-19）` まで完了。
- 今回、新規3件を追加し **256件地点** まで前進。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。今回は新規収集を優先し遡及QAは進めていない。

## 254. 熱血硬派くにおくん（タイヨーエレック）

- record: `docs/real_machine_db/machines/2008-05_nekketsu-kouha-kunio-kun.md`
- commit: `0d410648800cee6ae8070d52873d3b1db75c320d`
- releaseDate: `2008-05`（直前handoffでは5/19同日群として引継ぎ。ただし今回5/19を直接裏付ける独立資料を確定できず月精度で保存）
- systemType: ボーナス+ループ型ART / 天井ART
- coreStatus: `PARTIAL_WITH_PAYOUT_CONFLICT`
- resetBehaviorQA: `PARTIAL_WITH_RESET_CEILING_CONFLICT`

### 主要性能

設定 `1 / 2 / 5 / 6`。

- KUNIO BONUS: `1/885.62 / 1/862.32 / 1/840.21 / 1/819.20`
- RIKI BONUS: 同上
- KAZUMI BONUS: 全設定 `1/6553.60`
- 合成: `1/414.78 / 1/404.54 / 1/394.80 / 1/385.51`
- ART「熱血チャンス」: 20G/セット、約 `+1.0枚/G`、最大約90%ループ
- KUNIO/RIKI BONUS: 約180枚、KAZUMI BONUS: 約410枚
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`

### CONFLICT

- 機械割:
  - パチマガスロマガ: `98.00 / 101.24 / 104.78 / 108.32%`
  - 5号機まとめwiki: `97 / 101 / 107 / 111%`
  - `CONFLICT_PAYOUT_RATE`
- 設定変更後天井:
  - 2008年当時業界史/議論: `設定変更後256GでAR発動`
  - 2008-07-14更新5号機まとめwiki: 設定変更後天井を `～128G 15.63%` から `～1920G 2.34%` までの振り分けとして掲載
  - 平均・統合せず `CONFLICT_RESET_CEILING_256G_FIXED_VS_DISTRIBUTION_TO_1920G`

### v0.7 resetBehavior

- 設定変更後専用天井の存在は複数資料で確認。
- 公開朝一数値として固定256G説と詳細天井振り分け説を双方保存。
- 据え置き時の天井カウンタ、電源OFF→ON単独時、ART残状態、ガックン等は再探索後も直接根拠不足。
- 有利区間: `NOT_APPLICABLE`。

## 255. パチスロ リッジレーサー / パチスロリッジレーサーB（ニイガタ電子精機）

- record: `docs/real_machine_db/machines/2008-05-19_pachislo-ridge-racer-b.md`
- commit: `6b552c508ba293f456cd25e21398d165cca4ddfb`
- releaseDate: `2008-05-19`
- systemType: ボーナス+RT / 4リール・クアトロシステム
- coreStatus: `PARTIAL_WITH_PAYOUT_CONFLICT`
- resetBehaviorQA: `PARTIAL_VERIFIED_NO_SPECIAL_SETTING_CHANGE_NOTE`

### 主要性能

設定 `1〜6`。

- GOLD: `1/1560.38 → 1/963.76`
- SILVER: `1/963.76 → 1/771.01`
- BRONZE: `1/923.04 → 1/728.18`
- BIG合成: `1/362.08 → 1/269.70`
- REG: `1/675.63 → 1/949.80`
- 全ボーナス合成: `1/235.74 → 1/210.05`
- GOLD約360枚 / SILVER約314枚 / BRONZE約200枚 / REG約81枚
- RT「アタックタイム」約 `+0.5枚/G`。GOLD後は次回ボーナスまで、SILVER後55G、BRONZE後33G。
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`

### CONFLICT

- 機械割:
  - パチマガスロマガ: `97.84 / 99.98 / 102.14 / 104.67 / 108.32 / 113.69%`
  - 5号機クロニクル: `98.2 / 100.4 / 102.7 / 105.4 / 109.5 / 115.3%`
  - 当時業界史に設定6相当 `112.1%` の別系列記録
  - `CONFLICT_PAYOUT_RATE`

### v0.7 resetBehavior

- パチマガスロマガ現存インデックスに `攻め時・ヤメ時・設定変更時→特にナシ` と明記。
- 設定変更固有の短縮天井/専用モード/朝一数値は `NONE_CONFIRMED`。
- 据え置き/電源OFF→ON時のRT残状態、ガックン等は直接資料不足で `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE`。

## 256. 神たま（SNKプレイモア）

- record: `docs/real_machine_db/machines/2008-05-25_kamitama.md`
- commit: `20973ceb6a488c449f5426937217deb1080455c7`
- modelName: `カミタマX`
- releaseDate: `2008-05-25`
- systemType: ボーナス+CZ+完走型RT
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL_VERIFIED_RESET_CZ`

### 時系列修正

- 直前handoffでは `神たま` を5/26候補としていたが、グリーンべると2008-04-04記事で **「納品は5月25日から」** を直接確認。
- よって5/26群へ進む前に256件目として遡及せず正しい時系列位置で追加した。

### 主要性能

設定 `1〜6`。

- BIG: `1/385.5 → 1/295.2`
- REG: `1/461.5 → 1/337.8`
- みこしチャンス: `1/512.0 → 1/394.8`
- 合成: `1/148.9 → 1/112.6`
- 機械割: `96.9 / 98.6 / 100.1 / 102.7 / 106.1 / 110.1%`
- BIG約308枚 / REG約104枚 / みこしチャンス約39枚
- RT「みこし祭」50G、約 `+0.3枚/G`
- baseGamesPer50: `UNVERIFIED_AFTER_RESEARCH`

### v0.7 resetBehavior

- P-WORLDで **設定変更後もCZスタート** を直接確認。
- 設定変更後CZからのRT突入期待度は **約25%**。後年別資料でも一致。
- 通常時はCZ終了後150Gで再度CZへ入る周期構造。
- 据え置き/電源OFF→ON時の150G周期カウンタ・CZ/RT残状態、RT中設定変更時処理、ガックン等は直接資料不足で `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間: `NOT_APPLICABLE`。

## 今回の主要出典

取得日: 2026-09-01

### 熱血硬派くにおくん
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/04/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyoelec_slot/04/a.php
- https://w.atwiki.jp/5gouki/pages/87.html
- https://www.p-world.co.jp/machine/database/5170
- https://slothistory.com/kousin_kako05.html
- https://www.slothistory.com/kokolog-11.html
- https://kako.5ch.io/test/read.cgi/slot/1220309558/l-

### パチスロ リッジレーサー
- https://web-greenbelt.jp/00003559/
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/niigata_slot/01/h.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/niigata_slot/01/a.php
- https://cs62.cs-plaza.com/g/pachi/pla/s_conq/niigata_slot/01/niigata_slot_01.php
- https://5goki.com/niigatadenshi
- https://slothistory.com/kousin_kako05.html
- https://www.p-world.co.jp/machine/database/5155

### 神たま
- https://web-greenbelt.jp/00003604/
- https://www.p-world.co.jp/machine/database/5164
- https://w.atwiki.jp/5gouki/pages/114.html
- https://wikiwiki.jp/hanpachi/%E3%81%AA%E3%81%AA%E3%81%B1%E3%81%A1%20%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD/%E7%A5%9E%E3%81%9F%E3%81%BE%20%E3%81%BF%E3%81%93%E3%81%97%E3%81%A1%E3%82%83%E3%82%93%E5%A5%AE%E9%97%98%E7%B7%A8
- https://www.marimo0925.net/pachislot-kikaiwari-ranking-garoudensetsu-ban/
- https://web-greenbelt.jp/00003649/

## 重複防止

- 既存253件の再追加禁止。
- 254 `熱血硬派くにおくん`、255 `パチスロリッジレーサーB`、256 `神たま` も再追加禁止。
- `熱血硬派くにおくん` の具体導入日5/19は今回独立確認できなかったため、後続QAで日精度資料が出た場合のみreleaseDateを更新する。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準256件地点。2008-05-25 `神たま` まで完了。**
2. 2008-05-20〜24は今回日付別検索で予備監査したが、漏れ防止のためメーカー別/旧DBでも最終確認してから5/26へ進む。
3. 2008-05-26候補を具体日で再監査する。既知候補: `ヒミコスタイルA`、`犬キングX`、`ニューパルサーエボリューション`。直前handoffにあった `神たま` は5/25へ修正済みなので再追加禁止。
4. `ヒミコスタイル` は2008-05-15発表会/5-20業界記事までは確認済み。導入具体日は次回必ず一次/当時資料で再確認する。
5. 5/26同日群を閉じる前に、他メーカーの同日機・5/20〜25漏れを横断監査する。
6. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
7. 欠損は表記揺れ・型式名・メーカー・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックン/有利区間等へ検索語を変え、公式・業界・当時解析・旧DB・アーカイブ・回顧資料を横断してから `UNVERIFIED` 判定する。
