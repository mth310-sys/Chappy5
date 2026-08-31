# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- READMEのルールにより、INDEX本体より本 `LATEST_HANDOFF.md` を最新進捗として優先する。
- ミッションv0.7を正本として、性能コアに加え `resetBehavior` を新規機種で同時収集する。
- 前回までLATEST_HANDOFF基準で83件収録済み。
- 今回 `PIKASLO（ピカスロ）` を新規登録した。
- **LATEST_HANDOFF基準の収録数は84件。**
- **2007年2月を継続中。PIKASLOまで処理完了。次はスカイラブ（初代）を優先し、同月の未処理5号機を漏れ監査する。**

## 今回追加

### `machines/2007-02_pikaslo.md`
- PIKASLO（ピカスロ） / ヤーマ / 2007年2月。
- BELLCO公式旧機種一覧で「2007年2月登場」「5号機」「ノーマル」を確認。
- 設定1〜3の3段階。
- pacnkのボーナス合算: 1/218.50 / 1/202.30 / 1/188.30。
- 機械割は pacnk 97.5/101.5/104.5% と5号機クロニクル97.5/101.0/104.5%で設定2のみ差。平均せずCONFLICT。
- パチマガスロマガ旧攻略資料で BIG 345枚超終了・純増約336枚、CB1 253枚超終了・純増約221枚、CB2 134枚超終了・純増約117枚を確認。
- 50枚ベース、BIG/CB個別設定別確率は検索語・資料系統変更後も今回未確定。
- 天井非搭載。RT/ART付加機能なしの完全告知ノーマルとして整理。
- resetBehaviorは設定変更/据え置き/電源断/朝一/ガックンを再探索したが、本機固有の変更判別・電源断挙動は確定できずPARTIAL。有利区間は非該当。

## resetBehavior 遡及QA

### `machines/2005-09_shinseiki-evangelion.md`
- 性能コアの既存PARTIAL判定は維持したまま、v0.7 `resetBehavior` を追加。
- 初代2005年機は通常時天井非搭載。REG後100G RT「レイチャンス」搭載は既存公式/回顧資料で確認。
- 設定変更時/据え置き/電源OFF→ON時のRT残存・消去、ガックン等の変更判別は、検索語を分岐して再探索したが高信頼で確定できず `resetBehaviorQA: PARTIAL`。
- 有利区間は制度導入前のため非該当。

## 2007年2月進行メモ

今回まで確認済み:
- パチスロPLAYBOY（25Φ）
- パチスロPLAYBOY-30（30Φ）
- PIKASLO（ピカスロ）

次に優先:
- スカイラブ（SNKプレイモア / 型式名スカイラブX）

同月漏れ候補としてメーカー別一覧・P-WORLD・当時資料で要監査:
- アドリブ王子（三洋物産）
- パチスロ暴れん坊将軍
- ランボー怒りのパチスロ
- その他2007年2月導入の5号機

パチマガスロマガFREEの2007年前半全84機種回顧では、ピカスロ付近に「パチスロ暴れん坊将軍」「ランボー怒りのパチスロ」が並ぶため、導入月/納品日を一次・当時資料で照合して本線へ入れるか判断する。発表月だけでなくホール導入/納品時期を優先する。

## resetBehavior 方針継続

- 新規機種はv0.7に従い性能コアとresetBehaviorを同時探索する。
- 既存レコードは性能コアのCOMPLETE_CORE/PARTIALを不用意に崩さず、resetBehaviorQAを別管理する。
- 設定変更、リセット、朝一、据え置き、電源OFF→ON、RT/ART引継ぎ、天井、ガックンへ検索語を分岐する。
- 高信頼で確認できないものだけUNVERIFIED。
- 有利区間は制度導入前の5号機では非該当。
- 遡及QAは古い機種から順次進める。今回、新世紀エヴァンゲリオン（2005）まで追加済み。既に個別QA済みのニューオアシス等は重複してやり直さない。

## 次回再開地点

**2007年2月の次の未処理機から継続。まず初代 `スカイラブ`（SNKプレイモア / スカイラブX）の性能コア+resetBehaviorを収集し、その後アドリブ王子・暴れん坊将軍・ランボー等を含む同月候補の導入時期を監査する。並行して既存最古側のresetBehavior未収集レコードを1件ずつ遡及QAする。**

### 次回優先検索

- スカイラブ / スカイラブX / SNKプレイモア / 2007
- 設定別BIG/CB/合算、機械割、50枚ベース、RT純増、獲得枚数
- 設定変更/据え置き/電源OFF→ON/朝一/ガックン/RT引継ぎ/天井
- アドリブ王子 / 暴れん坊将軍 / ランボー / 2007年2月 納品 導入 5号機

## 今回の主要資料

### PIKASLO
- BELLCO公式 — https://www.s-bellco.co.jp/products/slot/
- パチマガスロマガ旧攻略 — https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/04/a.php
- pacnk — https://pacnk.com/slot/tools/sh_pikasuro.html
- 5号機クロニクル — https://5goki.com/yama
- パチマガスロマガFREE 5号機ヒストリア — https://pachimaga.com/free/playback/6e5a0c3e24180ec7c9d1174be25db63a1809f366.php

### 新世紀エヴァンゲリオン resetBehavior QA
- SANKYOオンライン博物館 — https://www.sankyo-fever.jp/collection/859/
- パチ7歴代レビュー — https://pachiseven.jp/articles/detail/12110
- アニメミル歴代概要 — https://animemiru.jp/articles/48042

次の作業者は README.md → ミッションv0.7 → INDEX.md → 本LATEST_HANDOFF.md → 既存machines の順に確認し、本引継ぎを優先して続行すること。
