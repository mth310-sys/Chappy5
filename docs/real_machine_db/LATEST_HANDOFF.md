# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- ミッションv0.7を正本として、性能コアに加え `resetBehavior` を新規機種で同時収集する。
- 前回までLATEST_HANDOFF基準で84件収録済み。
- 今回 `スカイラブ（初代 / 型式名スカイラブX）` を新規登録した。
- **LATEST_HANDOFF基準の収録数は85件。**
- **2007年2月を継続中。スカイラブまで処理完了。次はPSアドリブ王子を優先し、同月未処理5号機を漏れ監査する。**

## 今回追加

### `machines/2007-02_skylove.md`
- スカイラブ / SNKプレイモア / 2007年2月 / 型式名スカイラブX。
- P-WORLD、パチマガインターネット、パチマガスロマガ旧攻略、パチ7後年回顧、pacnkを横断。
- 設定別4ボーナス個別確率を解析値で取得。
- 7000P×10万日シミュレートPAYOUT: 96.94 / 99.36 / 101.73 / 104.16 / 106.56 / 108.92%。
- 1000円あたりプレイ数: 33.28 / 33.64 / 34.00 / 34.38 / 34.76 / 35.15P。
- BIG純増約270枚、CT標準純増約104枚。CTは技術介入でMAX111枚。
- 33G完走型RT「トレジャータイム」、約0.2枚/Gを確認。
- CT規定払い出し終了条件はパチマガ142枚 / P-WORLD145枚表記のためCONFLICT。平均せず双方保持。
- 天井非搭載を確認。
- resetBehaviorは設定変更/据え置き/電源OFF→ON/CZ・RT引継ぎ/ガックンを検索語分岐して再探索したが、本機固有の内部状態処理は高信頼で確定できずPARTIAL。有利区間は非該当。

## 2007年2月進行メモ

今回まで確認済み:
- パチスロPLAYBOY（25Φ）
- パチスロPLAYBOY-30（30Φ）
- PIKASLO（ピカスロ）
- スカイラブ（初代 / スカイラブX）

次に優先:
- PSアドリブ王子（三洋物産 / 型式名PSアドリブ王子VB）

PSアドリブ王子は今回の次候補監査で以下まで先行確認済み:
- P-WORLD: 2007年2月導入、5号機ノーマル、型式名PSアドリブ王子VB、赤7ADLIB BONUSは380枚以上の払出で終了。
- グリーンべると2007-02-02: 納品2月18日から。スーパーアドリブボーナス約300枚、赤約270枚、青約240枚。スーパー後100Gの昇格チャンス、通常時チェリー当選時1/4で20Gの昇格チャンス。
- 5号機クロニクル: 機械割 95.1 / 97.6 / 100.1 / 102.6 / 105.0 / 107.3%。
- パチマガスロマガ旧攻略: 5号機/5ライン/3枚掛け、3種ボーナスの15枚役ナビ率差、規定払い出し380枚。
- HAZUSE当時解析ページも現存。次回は設定別ボーナス確率・1000円ベース・resetBehaviorを優先して深掘りし、別ソース照合後に登録する。

同月漏れ候補として引き続き監査:
- パチスロ暴れん坊将軍
- ランボー怒りのパチスロ
- 科学忍者隊ガッチャマン
- 仮面ライダーDX走れ!スーパーバイク編
- TIMという名のパチスロ機
- パチスロ鉄拳伝タフ
- パチスロ あっぱれ応援団
- ニューハナハナ30
- その他2007年2月導入5号機

pacnkの2007年機種一覧では上記を含む2007年2月候補が確認できるため、導入月だけでなく納品日/メーカー一次・業界当時資料を照合し、本線へ順番に入れる。

## resetBehavior 方針継続

- 新規機種はv0.7に従い性能コアとresetBehaviorを同時探索する。
- 既存レコードは性能コアのCOMPLETE_CORE/PARTIALを不用意に崩さず、resetBehaviorQAを別管理する。
- 設定変更、リセット、朝一、据え置き、電源OFF→ON、RT/ART引継ぎ、天井、ガックンへ検索語を分岐する。
- 高信頼で確認できないものだけUNVERIFIED。
- 有利区間は制度導入前の5号機では非該当。
- 既存最古側resetBehavior遡及QAも、新規収集を止めない範囲で継続する。

## 次回再開地点

**2007年2月の次の未処理機から継続。まず `PSアドリブ王子` の性能コア+resetBehaviorを完成させ、その後同月候補を導入時期順に処理する。既存性能値はやり直さない。**

### 次回優先検索

- PSアドリブ王子 / PSアドリブ王子VB / 三洋物産 / 2007
- 設定別ボーナス確率 / 機械割 / 1000円 / 50枚 / ベース / 獲得枚数
- 設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 昇格チャンス / ガックン / 天井
- 暴れん坊将軍 / ランボー / ガッチャマン / 仮面ライダーDX / TIM / 鉄拳伝タフ / あっぱれ応援団 / ニューハナハナ30 / 2007年2月 納品 導入 5号機

## 今回の主要資料

### スカイラブ
- P-WORLD — https://www.p-world.co.jp/machine/database/4529
- パチマガインターネット — https://psmaga.com/database/machine/slot_index.php?id=5708
- パチマガスロマガ旧攻略 基本 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/a.php
- パチマガスロマガ旧攻略 ベース — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/c.php
- パチマガスロマガ旧攻略 CT技術介入 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/snk_slot/10/e.php
- pacnk — https://pacnk.com/slot/tools/sh_sukairabu2007.html
- パチ7 — https://pachiseven.jp/articles/detail/11235

### PSアドリブ王子（次回先行監査）
- P-WORLD — https://www.p-world.co.jp/machine/database/4565
- グリーンべると/P-WORLD業界ニュース — https://news.p-world.co.jp/articles/2027/greenbelt
- 5号機クロニクル — https://5goki.com/sanyo
- パチマガスロマガ旧攻略 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sanyo_slot/04/a.php
- HAZUSE旧解析 — https://hazuse.com/i/data/adlib/top.htm
- pacnk 2007機種一覧 — https://pacnk.com/photoslot/plist2007_0_0.html

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。
