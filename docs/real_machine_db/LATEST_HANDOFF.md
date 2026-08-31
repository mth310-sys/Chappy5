# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- 正本は `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` の v0.7。
- 新規機種では性能コア + `resetBehavior` を同時収集する。
- 前回LATEST_HANDOFF基準90件。
- 今回 `パチスロ鉄拳伝タフ` を新規登録し、**LATEST_HANDOFF基準91件**。
- 2007年2月はまだ未完了。
- `パチスロ暴れん坊将軍`（2007-03-04）は既登録なので再処理しない。

## 今回追加

### `machines/2007-02_pachislot-tekken-den-tough.md`

- パチスロ鉄拳伝タフ / オーイズミネオ・オーイズミ。
- 複数検索で2007年2月導入までは確認。日単位の全国納品日は高信頼資料で確定できず、推測せず `2007-02` とした。
- パチマガスロマガ旧攻略解析値:
  - BIG合成 1/496.48 → 1/420.10
  - REG合成 1/753.29 → 1/648.87
  - ボーナス合成 1/299.25 → 1/255.00
  - 1000円あたり 36.34〜36.35P → 41.29〜41.33P
  - BIG約300枚 / REG約100枚
  - BIG後100P RT / REG後12P RT
  - RT純増 +0.74〜+0.87枚/P（設定別）
- 機械割はpacnk掲載 96 / 98 / 101 / 103 / 106 / 108%。旧パチマガのPAYOUT欄は「現在調査中」のため別系統照合未完了、ANALYSIS_SINGLE。
- 旧攻略の攻め時・ヤメ時は「特にナシ」。通常時ゲーム数天井は確認できず。
- resetBehaviorは、設定変更/据え置き/電源OFF→ON時のRT内部状態・残G処理が高信頼資料で確定できずPARTIAL。朝一専用モード・短縮天井・有利区間は確認なし/非該当。
- coreStatus: COMPLETE_CORE
- resetBehaviorQA: PARTIAL

## 2007年2月 進行状況

既登録/処理済み:
- パチスロPLAYBOY（25Φ）
- パチスロPLAYBOY-30（30Φ）
- PIKASLO（ピカスロ）
- スカイラブ（初代 / スカイラブX）
- TIMという名のパチスロ機（2007-02-12）
- PSアドリブ王子（2007-02-18）
- 仮面ライダーDX〜走れ！スーパーバイク編（2007-02-18）
- 科学忍者隊ガッチャマン（全国予定2007-02-18、関東/東北は3月上旬へ延期）
- パチスロ鉄拳伝タフ（2007-02、日単位納品日未確定） ← 今回追加

未処理候補:
- ニューハナハナ-30（パイオニア公式で2007年2月発売、正確な納品日を再監査）
- パチスロ あっぱれ応援団（グリーンべるとで納品2007-02-25確認）
- トレジャーパイレーツ（KPEがあっぱれ応援団と同時発表。導入月/納品日を再監査）
- その他2007年2月導入5号機

## 次回再開地点

**2007年2月の残りを時系列監査する。最優先は `ニューハナハナ-30`。パイオニア公式で2007年2月発売、pacnkで設定別BIG/REG/PAYOUTを確認済みなので、まず正確な納品/稼働開始日と50枚ベース・獲得枚数・resetBehaviorを別系統資料まで掘る。日付上2/25以前と確定できる場合はそのまま新規登録する。続いて納品2007-02-25確認済みの `パチスロ あっぱれ応援団`、その後 `トレジャーパイレーツ` の導入日を監査する。**

### 次回優先検索

- ニューハナハナ-30 / パイオニア / 2007年2月 / 納品日 / 導入日 / 型式名
- ニューハナハナ30 / BIG / REG / 合算 / 機械割 / 1000円 / 50枚 / ベース / 獲得枚数
- ニューハナハナ30 / 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井
- パチスロ あっぱれ応援団 / KPE / 2007-02-25 / BIG / REG / 機械割 / 1000円 / RT / 純増 / リセット
- トレジャーパイレーツ / KPE / 2007年2月 / 2007年3月 / 納品 / 導入 / 5号機

## 今回の主要資料

### パチスロ鉄拳伝タフ
- パチマガスロマガ旧攻略 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/a.php
- パチマガスロマガ旧攻略 ボーナス — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/h.php
- パチマガスロマガ旧攻略 小役/1000円 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/c.php
- パチマガスロマガ旧攻略 小役別版 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/c_1.php
- パチマガスロマガ旧攻略 RT — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/oizumineo_slot/02/k_1.php
- pacnk — https://pacnk.com/slot/tools/sh_tekkendentafu.html
- 後年解析回顧 — https://plaza.rakuten.co.jp/slotlife777/

### 次回候補
- パイオニア公式2001〜2009 — https://www.slot-pioneer.co.jp/products/2009.html
- pacnk ニューハナハナ30 — https://pacnk.com/slot/tools/sh_newhana.html
- グリーンべると KPE2機種同時発表 — https://web-greenbelt.jp/00004042/
