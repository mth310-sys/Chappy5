# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- 正本は `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` の v0.7。
- 新規機種では性能コア + `resetBehavior` を同時収集する。
- 前回LATEST_HANDOFF基準で88件収録済み。
- 今回、時系列監査で `TIMという名のパチスロ機` が2007-02-12納品であることを確認し、先行漏れとして新規登録した。
- 続けて `科学忍者隊ガッチャマン` を新規登録した。全国一斉納品予定は2007-02-18だが、関東1都6県・東北6県は部材不足で3月上旬へ延期されたため地域差をレコード内に保持した。
- **LATEST_HANDOFF基準の収録数は90件。**
- 遡及resetBehavior QAは `日本一の桃太郎CT5` を補完。性能コアのCOMPLETE_COREは維持し、resetBehaviorQAはPARTIALとして別管理した。
- 2007年2月はまだ未完了。3月4日導入の `パチスロ暴れん坊将軍` は既登録なので再処理しない。

## 今回追加

### `machines/2007-02-12_tim-to-iu-na-no-pachislotki.md`

- TIMという名のパチスロ機 / HEIWABROS・平和。
- グリーンべると当時記事で納品 `2007-02-12` を確認。前回引継ぎ候補の中で2/18群より早いため時系列キューを補正した。
- パチマガスロマガ旧攻略のPAYOUTシミュレート値: 96.98 / 98.80 / 101.19 / 103.41 / 105.63 / 107.70%。
- 5号機クロニクルは 96.7 / 98.3 / 100.5 / 102.5 / 104.5 / 106.3% と掲載しているため、平均せずCONFLICTとして双方を保持。
- ボーナス合成: 1/246.38 → 1/196.80（設定1→6）。
- 1000円あたり: 36.45 → 38.58P。
- BIG約288枚、REG約180枚。
- 全ボーナス後に最大50G CHANCE ZONE。特殊リプレイ成立で100G RT `RED ZONE`、純増約+0.5枚/G。
- 通常時ゲーム数天井は確認できず、旧攻略の攻め時・ヤメ時は「特にナシ」。
- coreStatus: COMPLETE_CORE。
- resetBehaviorQA: PARTIAL。設定変更/据え置き/電源OFF→ON時のCZ/RT内部状態は高信頼資料で確定できず、推測せずUNVERIFIED。

### `machines/2007-02-18_kagaku-ninjatai-gatchaman.md`

- 科学忍者隊ガッチャマン / タイヨー / 型式名 `TAPS06`。
- 全国一斉納品予定 `2007-02-18`。関東1都6県・東北6県のみ部材不足で3月上旬へ延期。releaseDateは全国基準予定日とし地域差を明記。
- 設定別BIG合成: 1/387.79 → 1/344.93、REG全設定1/1310.72、ボーナス合成1/299.25 → 1/273.07。
- 1000円あたり: 設定1〜3 34.74P、設定4〜6 35.30P。
- 機械割は現存解析整理資料で96 / 99 / 101 / 104 / 109 / 117%。現時点では単一系統のためANALYSIS_SINGLE。
- 同色BIG後GT500、赤頭BIG後GT150、青頭BIGはGTなし。
- G-ZONEはAT。1000円あたり72.14P（設定1〜3）/74.60P（設定4〜6）。
- ボーナス間1300Gで救済AT `G-ZONE` が発動し次回ボーナスまで継続する天井整理資料を保存。ボーナス直撃天井とは区別。
- BIG/RB獲得は資料の定義差あり。グリーンべるとBB平均約310枚/RB約100枚、旧攻略は規定払い出し由来の純増約265枚/REG約80枚。平均せず定義分離。
- coreStatus: COMPLETE_CORE。
- resetBehaviorQA: PARTIAL。設定変更/据え置き/電源OFF→ON時の1300GカウンタおよびGT/G-ZONE内部状態は高信頼資料で確定できず、推測せずUNVERIFIED。

## 遡及 resetBehavior QA

### `machines/2005-10_nihonichi-no-momotaro-ct5.md`

- 既存性能コア値・CONFLICTを維持したままv0.7 `resetBehavior` を追加。
- RTなし。旧攻略の攻め時・ヤメ時は「特にナシ」で、通常時天井/朝一専用ゾーン等は確認されない。
- 有利区間は非該当。
- 設定変更/電源OFF→ON時の本機固有挙動、ガックン等の変更判別は、公式・当時業界・旧攻略・HAZUSE・5号機クロニクル・後年解説まで再探索しても高信頼資料で確定できずUNVERIFIED。
- `coreStatus: COMPLETE_CORE` / `resetBehaviorQA: PARTIAL` として分離。

## 2007年2月 進行状況

既登録/処理済み:
- パチスロPLAYBOY（25Φ）
- パチスロPLAYBOY-30（30Φ）
- PIKASLO（ピカスロ）
- スカイラブ（初代 / スカイラブX）
- TIMという名のパチスロ機（2007-02-12） ← 今回追加
- PSアドリブ王子（2007-02-18）
- 仮面ライダーDX〜走れ！スーパーバイク編（2007-02-18）
- 科学忍者隊ガッチャマン（全国予定2007-02-18、関東/東北は3月上旬へ延期） ← 今回追加

未処理候補:
- パチスロ鉄拳伝タフ（2007年2月は確認、正確な納品日を再監査）
- ニューハナハナ-30（パイオニア公式で2007年2月発売、正確な納品日を再監査）
- パチスロ あっぱれ応援団（グリーンべるとで納品2007-02-25を確認）
- トレジャーパイレーツ（KPEがあっぱれ応援団と同時発表した5号機。前回候補から漏れていたため追加監査対象）
- その他2007年2月導入5号機

時系列補正済み:
- TIMという名のパチスロ機: 2007-02-12納品のため2/18群より前へ補正し登録済み。
- 科学忍者隊ガッチャマン: 全国予定2/18、関東/東北のみ3月上旬へ延期。全国基準日と地域差を分離。
- パチスロ あっぱれ応援団: 2007-02-25納品を当時業界記事で確認。
- パチスロ暴れん坊将軍: 2007-03-04納品開始、既登録。
- ランボー怒りのパチスロX: 2007-03-11納品開始予定のため3月側。

## 次回再開地点

**2007年2月の残りを時系列監査する。まず `パチスロ鉄拳伝タフ` と `ニューハナハナ-30` の正確な納品/稼働開始日を当時業界資料・メーカー公式・P-WORLD・旧DBで再探索し、2/18より前または2/18〜2/25の未処理機が判明した場合はその最古機から性能コア + resetBehaviorを収集する。続いて2/25納品確認済みの `パチスロ あっぱれ応援団` を処理する。同時発表された `トレジャーパイレーツ` も5号機本線の漏れ候補として導入日を監査する。**

### 次回優先検索

- パチスロ鉄拳伝タフ / オーイズミ / 2007年2月 / 納品日 / 導入日 / 型式名
- ニューハナハナ-30 / パイオニア / 2007年2月 / 納品日 / 導入日
- パチスロ あっぱれ応援団 / KPE / 2007-02-25 / BIG / REG / 機械割 / 1000円 / RT / 純増
- トレジャーパイレーツ / KPE / 2007年2月 / 納品 / 導入 / 5号機
- 各機種: 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / RT引継ぎ / ガックン

## 今回の主要資料

### TIMという名のパチスロ機
- グリーンべると — https://web-greenbelt.jp/00003985/
- P-WORLD — https://www.p-world.co.jp/machine/database/4558
- パチマガスロマガ旧攻略 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/a.php
- パチマガスロマガ旧攻略 ボーナス/PAYOUT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/h.php
- パチマガスロマガ旧攻略 小役/1000円 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/heiwabros_slot/02/c.php
- HAZUSE — https://hazuse.com/i/data/tim/top.htm
- 5号機クロニクル — https://5goki.com/heiwa-olympia

### 科学忍者隊ガッチャマン
- グリーンべると — https://web-greenbelt.jp/00003979/
- P-WORLD業界ニュース（納品延期） — https://news.p-world.co.jp/articles/2053/greenbelt
- P-WORLD — https://www.p-world.co.jp/machine/database/4552
- パチマガスロマガ旧攻略 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/a.php
- パチマガスロマガ旧攻略 ボーナス — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/h.php
- パチマガスロマガ旧攻略 小役/1000円 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/c.php
- パチマガスロマガ旧攻略 G-ZONE — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/taiyo_slot/54/k.php
- pacnk — https://pacnk.com/slot/tools/sh_kagainjataigacchaman.html
- pachirinko — https://www.pachirinko.com/5gouki.gacchaman.chuusen.kakuritu.html
- 天井整理資料 — https://crankyseven.com/sp/tenjo-5ka.htm

### 遡及QA 日本一の桃太郎CT5
- ベルコ公式一覧 — https://www.s-bellco.co.jp/products/slot/
- ベルコ公式機種ページ — https://www.s-bellco.co.jp/products/slot/momoraro/
- グリーンべると — https://web-greenbelt.jp/00005181/
- パチマガスロマガ旧攻略 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/belco_slot/75/belco_slot_75.php
- HAZUSE — https://www.hazuse.com/i/i_2.htm

### 次回候補監査
- パイオニア公式2001〜2009 — https://www.slot-pioneer.co.jp/products/2009.html （ニューハナハナ-30を2007年2月発売と確認）
- グリーンべると KPE2機種同時発表 — https://web-greenbelt.jp/00004042/ （あっぱれ応援団/トレジャーパイレーツ。あっぱれ応援団納品2/25）

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。
