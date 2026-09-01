# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは234件地点。232 `ハナダマシイ`、233 `ハナダマシイ-30`、234 `NEO花伝説-30` まで追加済み。
- 今回、2008-03-17〜03-31境界を再監査し、ヤーマ `がんばれ元気 激闘編` を235件目として追加。
- 導入時系列の最新前進地点は2008-03-24。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 235. がんばれ元気 激闘編（ヤーマ）

- new record: `docs/real_machine_db/machines/2008-03-24_ganbare-genki-gekitouhen.md`
- manufacturer: ヤーマ
- modelName: `ガンバレゲンキ3`
- releaseDate: `2008-03-24`（P-WORLD当時掲示板の同日「今日からですね！」を具体日の補助根拠。メーカー公式/P-WORLD本体は2008年3月まで）
- generation: 5号機初期
- systemType: ボーナス + ART
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- 機械割:
  - 旧5号機wiki `98.0 / 100.2 / 102.2 / 104.5 / 107.0 / 110.0%`
  - 5号機クロニクル `98.0 / 100.0 / 102.0 / 104.5 / 107.0 / 110.0%`
  - 設定2・3のみ0.2pt差のため `CONFLICT_MINOR_PAYOUT_RATE`。平均化しない。
- ボーナス合成: 全設定おおむね `1/199.8`。
- 50枚ベース（パチマガスロマガ1000円あたり）: `32.13 / 32.31 / 32.48 / 32.68 / 32.86 / 33.04G`。
- BIG約312枚 / MID(MB)約102枚 / REG約54枚。
- ART `チャンピオンロード`: 約+1.5〜1.6枚/G。
- 赤ART 77G、金ART 最大5000G（実質次回ボーナスまで）。
- BIG後ART突入率100%、ART終了後はCZへ戻り約75%ループ期待。
- 前回チャレンジファイト転落から666G消化で周期CZ `チャレンジファイト` へ入る挙動を確認。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `UNVERIFIED_AFTER_RESEARCH`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `UNVERIFIED_AFTER_RESEARCH`
- ceilingAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- modeAfterReset / stateAfterReset: `UNVERIFIED_AFTER_RESEARCH`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties / numericResetData: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- 本機の666G周期CZについて、設定変更でカウンタがクリアされるか、据え置き/電源OFF→ONで引き継ぐかは直接根拠を発見できず一般論で補完しない。
- 前作 `がんばれ元気` の950G天井/変更時情報は別スペックなので流用禁止。

## 今回の境界監査メモ

- `バイオメサイア` は検索結果に「導入時期 2008-03-17」とする個人ブログが出るが、これは筆者の所有実機導入記録。実機自体はアルゼの1999年6月・4号機であり、5号機本線から除外。混入禁止。
- 2008年3月機として `ジアマゾンロード`（ウィンネットテクノロジー）もmain未登録候補。月単位では2008/3を確認済みだが、`がんばれ元気 激闘編` より前後する具体導入日を次回詰める。
- 3月列を閉じる前に `ジアマゾンロード` と、3/25〜3/31の未処理機をメーカー/業界一覧で再監査する。

## 今回の主要出典

取得日: 2026-09-01

### がんばれ元気 激闘編
- ベルコ現公式（旧ヤーマ機）: https://www.s-bellco.co.jp/products/slot/yama_genki_gekitou/
- P-WORLD: https://www.p-world.co.jp/machine/database/5116
- パチマガスロマガ ベース: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/yama_slot/09/c.php
- パチスロ5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/137.html
- K-Navi ART: https://p-kn.com/slot/775/5119/
- 5号機クロニクル ヤーマ: https://5goki.com/yama
- マイクロオーダーサービス当時攻略アーカイブ: https://plaza.rakuten.co.jp/mosnet/diaryall/

### 境界除外確認
- アルゼ `バイオメサイア`（1999年6月・4号機確認）: https://pachinko.hatenablog.jp/entry/1999/06/bio-messiah

## 重複防止

- 既存234件の再追加禁止。
- 235 `がんばれ元気 激闘編` も再追加禁止。
- `がんばれ元気`（前作）と `がんばれ元気 激闘編`（型式ガンバレゲンキ3）は別スペック。天井/reset情報を相互流用しない。
- `バイオメサイア` は4号機。2008年3月5号機として登録しない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準235件地点から継続。**
2. **2008年3月残監査を継続。最優先は `ジアマゾンロード` の具体導入日・既存有無・型式を詰め、2008-03-24より前なら番号は後発でも導入日を正しく記録して遡及追加する。**
3. その後2008-03-25〜03-31のメーカー/業界一覧を横断し、3月列を閉じてから4月へ進む。
4. 既知4月候補は北電子 `月光仮面2A`（2008-04-07発売記録）、アルゼ `アレックス7R`（2008-04-21発売記録）。3月未処理を優先。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
