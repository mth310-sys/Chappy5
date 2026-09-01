# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md` を再読して継続。
- `INDEX.md` は旧19件地点のため、README規定どおり本 `LATEST_HANDOFF.md` を進捗正本とする。
- 直前handoffは238件地点。238 `月光仮面` まで登録済み。
- 同じ北電子の `ジャンキージャグラー` は既存検索で未登録を確認し、239件目として追加。
- 当時グリーンべるとは `月光仮面` と `ジャンキージャグラー` の双方を2008-04-06納品開始と明記。パチビー等はジャンキージャグラーを2008-04-07導入とするため、納品開始/ホール導入日のラベル差を保持。
- 導入時系列の具体日前進地点は2008-04-06まで。次は2008-04-07群。
- resetBehavior遡及QAは `球児（2006-09）` まで補完済み。次対象は `ジャックポット・トロピカルバージョン2（2006-09）` 以降。

## 239. ジャンキージャグラー（北電子）

- new record: `docs/real_machine_db/machines/2008-04-06_junkie-juggler.md`
- manufacturer: 北電子
- releaseDate: `2008-04-06`
- releaseDateConfidence: `INDUSTRY_DELIVERY_START`
- generation: 5号機初期
- systemType: ノーマルA / 完全告知 / ボーナス主体（RT・ART・ATなし）
- coreStatus: `COMPLETE_CORE`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG: `1/292.6 / 1/282.5 / 1/268.6 / 1/260.1 / 1/252.1 / 1/240.9`。
- REG: `1/512.0 / 1/512.0 / 1/431.2 / 1/399.6 / 1/381.0 / 1/364.1`。
- ボーナス合成: `1/186.2 / 1/182.0 / 1/165.5 / 1/157.5 / 1/151.7 / 1/145.0`。
- メーカー発表系列の機械割: `97.08 / 98.24 / 101.55 / 103.48 / 105.13 / 107.33%`。
- シミュレーションのピエロ/ベルこぼし時: `97.9 / 99.1 / 102.5 / 104.4 / 106.1 / 108.3%`。条件違いのため平均化しない。
- 50枚ベース完全取得時: `36.36 / 36.36 / 36.36 / 36.37 / 36.37 / 36.38G`。
- 50枚ベースピエロ/ベルこぼし時: `35.76 / 35.76 / 35.77 / 35.77 / 35.78 / 35.78G`。
- BIG約309枚、REG約143枚。
- BIGは345枚超払い出し、REGは150枚超払い出しで終了。
- 5号機ジャグラー第4弾。完全告知、小役同時抽選あり、RT/ART/ATなし、通常ゲーム数天井なし。

### v0.7 resetBehavior

- settingChangeBehavior: `UNVERIFIED_AFTER_RESEARCH`
- carryOverBehavior: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_MODE_STATE_CONFIRMED`
- powerCycleBehavior: `UNVERIFIED_AFTER_RESEARCH`
- gameCounterReset: `NOT_APPLICABLE_NO_GAME_COUNT_CEILING_CONFIRMED`
- ceilingAfterReset: `NOT_APPLICABLE_NO_CEILING_CONFIRMED`
- modeAfterReset: `NOT_APPLICABLE_NO_MODE_SYSTEM_CONFIRMED`
- stateAfterReset: `NOT_APPLICABLE_NO_INTERNAL_STATE_SYSTEM_CONFIRMED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties / numericResetData: `NONE_CONFIRMED`
- resetDetection: `UNVERIFIED_AFTER_RESEARCH`
- `ジャンキージャグラー / Junkie Juggler / 北電子` と `設定変更 / リセット / 朝一 / 朝イチ / 据え置き / 電源OFF ON / 電断 / ガックン / 初期出目 / 天井` を組み替えて当時業界・攻略解析・旧DB・回顧資料を横断。後年ジャグラーのガックン一般論は見つかるが、本機固有の直接資料を確定できないため転記しない。

## 今回の境界監査メモ

- `ジャンキージャグラー` はmain未登録だったため239として追加。
- 2008-04-07候補を再確認。旧業界史は `ナイトライダーSP（銀座）` と `パチスロ クローズS（トリビー）` をともに `2008-04-07発売` とする。
- `パチスロ クローズS` はP-WORLD現存ページに、設定変更後は内部的にチャンスゾーンから開始、朝一いきなりARTなら設定変更濃厚、通常時100G周期CZ、無限ART約+0.9枚/Gというv0.7上重要な直接情報が残る。次回は同日2機種のうち既存登録を再確認し、時系列漏れ防止のため `ナイトライダーSP` を先に監査してから `クローズS` を処理する。
- 2008-04-14は旧業界史で `デジスロF / デジスロV-30（ベルコ）` 発売。30φ版はP-WORLDで型式 `デジスロV-30`、RT搭載、2008年4月導入を確認。4/7群後に25φ/30φを別機として処理する。
- `アレックス7R` は旧handoffどおり4月本線へ自動配置しない。旧業界史に2008-05-07 or 05-12発売、04-07先行導入済みの記録があるため、導入日定義を再調査してから扱う。

## 今回の主要出典

取得日: 2026-09-01

### ジャンキージャグラー
- グリーンべると: https://web-greenbelt.jp/00003429/
- P-WORLD業界ニュース: https://news.p-world.co.jp/articles/2700/greenbelt
- パチビー: https://www.pachibee.jp/machines/index/209080017
- K-Navi: https://p-kn.com/slot/783/
- ジャグラー解析攻略: https://juggler7.com/junkie/index.html
- けんのスロットシミュレーション: https://kenslo65536.com/kaiseki/juggler-janki.html
- P-WORLD: https://www.p-world.co.jp/machine/database/5114
- みんスロ: https://minslo.com/%E3%82%B8%E3%83%A3%E3%83%B3%E3%82%AD%E3%83%BC%E3%82%B8%E3%83%A3%E3%82%B0%E3%83%A9%E3%83%BC/
- パチマガスロマガ ジャグラーミュージアム: https://psmaga.com/special/juggler_museum/index.php

### 次候補
- パチスロ業界初まとめ（2008-04-07/04-14発売記録）: https://slothistory.com/kousin_kako05.html
- P-WORLD パチスロ クローズ: https://www.p-world.co.jp/machine/database/5089
- P-WORLD デジスロV-30: https://www.p-world.co.jp/machine/database/5124
- パチンコFAN 2008年度一覧: https://pacnk.com/photoslot/mlist_2008.html

## 重複防止

- 既存238件の再追加禁止。
- 239 `ジャンキージャグラー` も再追加禁止。
- `月光仮面` は238、`ジャンキージャグラー` は239。
- ジャンキージャグラーの後年別パネル（2008-10赤、2009-04緑）は、性能違いの別型式根拠がない限り今回の初期機種レコードと二重登録しない。

## resetBehavior 遡及QA

### 次の対象

- **`ジャックポット・トロピカルバージョン2（2006-09）` 以降のv0.7未補完レコードを既存順で監査。**
- 既にresetBehavior節がある場合は飛ばし、性能コアをやり直さずresetBehaviorのみ補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準239件地点から継続。**
2. **2008-04-07発売候補 `ナイトライダーSP（銀座）` を最優先。main既存レコードを確認し、未登録なら240件目として性能コア + v0.7 resetBehaviorを収集。**
3. 同日 `パチスロ クローズS（トリビー）` を続ける。P-WORLDに設定変更後CZ開始など重要なresetBehavior直接情報があるため必ず反映する。
4. その後2008-04-08〜13日の漏れ監査を挟み、2008-04-14 `デジスロF / デジスロV-30` へ進む。
5. resetBehavior遡及QAは `ジャックポット・トロピカルバージョン2（2006-09）` から継続。
6. 欠損は表記揺れ・型式名・メーカー名・シリーズ名と、設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/ガックンを変えて十分再探索してから `UNVERIFIED_AFTER_RESEARCH`。競合は平均せず `CONFLICT`。
