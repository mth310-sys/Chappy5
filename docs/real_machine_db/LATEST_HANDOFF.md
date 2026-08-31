# 実機DB 最新リレー引継ぎ

更新日: 2026-09-01

## 現在地点

- 最新mainの `README.md`、実機DBミッションv0.7、`INDEX.md`、既存レコード、直前 `LATEST_HANDOFF.md`、直近commitを確認して継続。
- `INDEX.md` は旧19件地点のままなので、README規定どおり `LATEST_HANDOFF.md` を進捗正本とする。
- 186件目 `ハワイ-30` までを継承。
- **187件目として `南国姉妹-30`（アスワン東京）を追加済み。**
- 新規レコード: `docs/real_machine_db/machines/2007-09_or_10_nangoku-shimai-30.md`
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`
- 新規レコードcommit: `19b5d9022a9704707123b7fd141d9a8862cf7303`

## 187. 南国姉妹-30

- manufacturer: アスワン東京
- releaseDate: `2007-09 / 2007-10 (CONFLICT)`
- generation: 5号機初期
- systemType: A+RT / ボーナス+固定G数RT / 30Φ / 完全告知系
- coreStatus: `PARTIAL`
- resetBehaviorQA: `PARTIAL`

### 性能コア

- K-Naviの当時機種ページでは設定1〜6のBIG/REG/機械割がすべて `未発表`。30Φ固有の設定別数値を十分再探索したが確定できず `UNVERIFIED`。
- 25Φ同名機や他の南国シリーズから性能値を自動流用しない。
- 赤7BIG/青7BIGは348枚超払い出し終了、CHALLENGE BONUSは132枚超払い出し終了。
- RT `スーパーウェーブタイム(SWT)` を搭載。K-Naviでは赤7後SWTのボーナスGET率 `80%強`。
- 青7BIG後RTはP-WORLD `100G` とK-Navi画面表示 `200G` が競合するため `CONFLICT`。
- 50枚ベース、実純増枚数、SWT純増/Gは表記揺れ・項目語・資料系統を変えて再探索したが確定できず `UNVERIFIED`。

### 導入時期

- pacnk 2007年度一覧は2007年9月群に掲載。
- pacnk頭文字一覧、スロリスクタイム、後年2007年回顧資料は2007年10月。
- 当時slothistoryでは2007-08-11時点で検定通過/発売確定側へ移動している一方、2007-12-28更新に未確定欄記述もあり、実納品月を一意に確定できない。
- 平均・推定せず `2007-09 / 2007-10 CONFLICT` を保持。

### v0.7 resetBehavior

- settingChangeBehavior: 専用モード/短縮天井/朝一恩恵は `NONE_CONFIRMED`、SWT中変更時のRT残G/状態処理は `UNVERIFIED`
- carryOverBehavior: 通常時天井は `NONE_CONFIRMED`、SWT中据え置き時のRT残G/状態処理は `UNVERIFIED`
- powerCycleBehavior: 電源OFF→ONのみの通常時恩恵は `NONE_CONFIRMED`、SWT中電断復帰は `UNVERIFIED`
- gameCounterReset: 正規仕様として通常時ゲーム数天井を確認できず `NONE_CONFIRMED`
- ceilingAfterReset: `NONE_CONFIRMED`
- modeAfterReset: 朝一/設定変更専用モード、公開振り分け `NONE_CONFIRMED`
- stateAfterReset: SWT中設定変更/据え置き/電断時処理 `UNVERIFIED`
- advantageousSectionReset: `NOT_APPLICABLE`
- resetBenefits / resetPenalties: `NONE_CONFIRMED`
- resetDetection: 本機固有ガックン/初期出目/告知ランプ等 `UNVERIFIED`
- numericResetData: `NONE_CONFIRMED`
- `南国姉妹-30 / 南国姉妹30 / 南国姉妹 / アスワン東京` と `設定変更 / リセット / 朝一 / 据え置き / 電源OFF ON / ガックン / 天井 / 天井短縮 / モード / SWT / RT残り / 変更判別` を組み替え、K-Navi、P-WORLD、pacnk、slothistory、古いDB/回顧資料を横断。
- P-WORLD掲示板に1000G/1300〜1400Gの「天井」情報があるが、正規仕様か裏基板/改造機由来か判別不能のため本線へ採用しない。

## 主要出典

### 南国姉妹-30
- K-Navi: https://p-kn.com/slot/655/
- P-WORLD: https://www.p-world.co.jp/machine/database/4949
- pacnk 2007年度一覧: https://pacnk.com/photoslot/plist2007_0_0.html
- pacnk「な」一覧: https://pacnk.com/slot/s/mlist_na.html
- スロリスクタイム5号機一覧: https://pachisuro100.com/itiran/
- slothistory 更新情報4: https://slothistory.com/kousin_kako04.html

取得日: 2026-09-01

## 9月漏れ監査メモ

- `南国姉妹-30` を187件目として追加。導入月は2007-09/10 CONFLICTを維持。
- `クレイジージョーカー` はmainに既存レコード `docs/real_machine_db/machines/2007-09-17_crazy-joker.md` を確認済み。重複追加しない。
- `熊酒場-30` は既存 `2007-09-02_kuma-sakaba-30.md`。重複追加しない。
- P-WORLD/Pacnk/当時一覧とmain既存群を引き続き突合し、**9月独立未登録機を閉じてから10月へ進む**。
- 9月残候補として `しぇんしぇーのスロットマシーン-30`、`セブンボンバーA`、`ミスターマリック` 等が回顧一覧に見えるため、まずパチスロ種別・5号機・実導入時期・main既存有無を確認する。候補名だけで登録しない。

## resetBehavior 遡及QA

- 2006年5〜6月群は既補完機を重複改変せず通過済み。
- 2006年7月 `新造人間キャシャーン` は補完済み。
- 2006年7月 `花盛` はv0.7 resetBehavior補完済み（commit `fe6a61d86ab1dbac3e703381115b18c5fbeae017`）。
- **次の最古resetBehavior欠損候補は2006年7月 `大江戸漫遊記`。** 現レコード `docs/real_machine_db/machines/2006-07_ooedo-manyuuki.md` の既存性能コアを不用意に再採掘せず、resetBehaviorのみ別管理で補完する。

## 次回再開地点

1. **LATEST_HANDOFF基準187件地点から継続。** 2007年9月一覧とmain既存群を再照合し、残る独立未登録5号機の最古から追加する。
2. 優先監査候補: `しぇんしぇーのスロットマシーン-30` → `セブンボンバーA` → `ミスターマリック`。各候補は型式/メーカー/実導入月を別資料で確認し、より古い未処理機が判明した場合は漏れ防止を優先する。
3. 9月監査を閉じた後、2007年10月へ前進。既確認候補は `マッドジー` 2007-10-09、`マジックモンスター2` 2007-10-22予定。`南国姉妹-30` は導入月CONFLICTのため10月側監査でも再照合対象にするが、性能レコード自体は重複作成しない。
4. resetBehavior遡及QAは **2006年7月 `大江戸漫遊記`** から再開。
5. PARTIAL/UNVERIFIEDは最初の検索で確定せず、表記揺れ・型式・メーカー・シリーズ・設定変更/リセット/朝一/据え置き/電断/天井/モード/ガックン/有利区間を組み替えて資料系統を横断する。競合値は平均せず `CONFLICT`。
