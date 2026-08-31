# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準156件。**
- 155件目 `ビッグハイビ-30` の次、2007-09-10導入の `恐怖新聞`（アリストクラートテクノロジーズ）を156件目として登録。
- 新規機種は性能コアとv0.7 resetBehaviorを同時収集。欠損は再探索後のみUNVERIFIED、競合値は平均せず保持。

## 今回新規追加

### 156. 恐怖新聞（アリストクラートテクノロジーズ）

- `docs/real_machine_db/machines/2007-09-10_kyofu-shinbun.md`
- releaseDate本線: `2007-09-10`
  - P-WORLD、5号機クロニクル、タイアップ機一覧、回顧資料はいずれも2007年9月を確認。
  - P-Summaが引用する当時機種記録は具体導入日を2007-09-10としており、月単位資料と整合。
- generation: 5号機
- systemType: A+ART / ボーナス+CZ+ART
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- BIG合算（大除霊+除霊）: `1/356.17 → 1/282.48`
- REG: 全設定 `1/204.80`
- ボーナス合算: `1/130.03 → 1/118.72`
- 大除霊BONUS合算: `1/712.35 → 1/564.97`
- 除霊BONUS合算: `1/712.35 → 1/564.97`
- BIG系実獲得目安: 平均約270枚
- CZ「憑依CHANCE」: 全ボーナス後30G
- ART「ポルターガイストタイム」: 100G、ボーナス成立でも終了

#### CONFLICT

- 機械割:
  - 5号機クロニクル `96.9 / 98.8 / 100.7 / 103.7 / 106.4 / 109.2%`
  - 後年シリーズ整理資料 `98.2 / 99.4 / 101.2 / 102.4 / 103.6 / 105.4%`
  - 平均せずCONFLICT。
- ART純増:
  - K-Navi 約`+0.4枚/G`
  - 後年シリーズ整理資料 約`+0.6枚/G`
  - 平均せずCONFLICT。
- 50枚あたりゲーム数は、機種名/2007/メーカー/1000円/50枚/ベース/コイン持ち/小役確率まで検索語を変更し、P-WORLD、K-Navi、必勝本、古い5号機DB、回顧資料を横断したが確定できず `UNVERIFIED`。

## v0.7 resetBehavior

- `恐怖新聞 / 恐怖新聞2007 / アリストクラート` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / 天井 / モード / 憑依CHANCE / ポルターガイストタイム / ガックン` を組み替えて再探索。
- 通常時ゲーム数天井、設定変更時短縮天井、朝一専用通常モード、公開リセット恩恵率は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。
- 設定変更/据え置き/電源OFF→ON時のCZ残G、ART残G、成立済みボーナス等の特殊状態処理は、本機固有の高信頼資料を確定できず `UNVERIFIED`。
- 本機固有のガックン、液晶/ランプ等による変更判別も十分再探索後 `UNVERIFIED`。

## resetBehavior遡及QA進捗

- 既存レコードは少なくとも2006-03-27収録群までv0.7 resetBehavior補完済みであることを直前handoffから継承。
- 次回QAはその次の時系列既存レコードから欠損確認を継続する。

## 2007年9月境界

- 2007-09-03群の `シスタークエスト`、`ビッグハイビ-30`、2007-09-10の `恐怖新聞` まで処理済み。
- 次は2007-09-10同日〜09-16の未処理候補をメーカー別一覧・当時業界記事で監査する。
- `ビーキッズクラブR` はグリーンべると当時記事で **2007-09-17納品開始予定** を確認済みのため、2007-09-10群に漏れがなければ有力な次候補。
- `戦慄-IF IT HAPPEN`（エール）は2007-08-17時点で型式 `戦慄DD` の情報公開を確認しているが、具体導入日をまだ確定していないため、導入順監査を先に行う。

## Bun Bun Maru 境界監査（継続HOLD）

- `Bun Bun Maru-L / -R` は2007年パチスロ5号機としての独立証拠が弱く、同時期のパチンコ系名称との混同リスクがあるため `UNRESOLVED / HOLD` 継続。

## 今回の主要出典

### 恐怖新聞
- P-WORLD: https://www.p-world.co.jp/machine/database/4872
- K-Navi: https://p-kn.com/slot/634/
- K-Navi ポルターガイストタイム: https://p-kn.com/slot/634/3835/
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/961/1/14918
- 5号機クロニクル: https://5goki.com/aristocrat
- P-Summa: https://psumma.jp/trend/67902/
- パチ7 アリストクラート全機種レビュー: https://pachiseven.jp/articles/detail/11837
- パチマガスロマガFREE回顧: https://pachimaga.com/free/special/adc53f6b71434383d0aab079c502ca80a9f265f6.php
- 後年シリーズ整理: https://www.marimo0925.net/pachislot-kyouhushinbun-kikaiwari-ranking-ban/

### 次候補境界
- グリーンべると ビーキッズクラブR（2007-08-24）: https://web-greenbelt.jp/00004275/
- K-Navi 戦慄-IF IT HAPPEN続報（2007-08-17）: https://p-kn.com/topics/news/311/

取得日: 2026-08-31

## 今回GitHub反映

- `恐怖新聞` 新規追加: `a69318c71e54a7dea9f8758353f666303b2ef6f1`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準156件地点から継続。2007-09-10同日〜09-16の漏れを短く最終監査し、未処理最古機を登録する。現時点の次有力候補は2007-09-17納品開始予定の `ビーキッズクラブR`。ただし `戦慄-IF IT HAPPEN（戦慄DD）` 等の実導入日を先に比較する。**
2. 新規機種は性能コア＋v0.7 resetBehaviorを同時収集する。
3. QAは既存全レコードを古い順に確認し、2006-03-27群より次の時系列レコードからresetBehavior欠損を探す。
4. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名とリセット関連検索語を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
5. 競合値は平均せずCONFLICT、既存COMPLETE_COREの性能完了判定は不用意に崩さずリセットQA状態を別管理する。
6. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの156件地点を正**として継続する。
