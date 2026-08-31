# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準147件。**
- 前回145件目 `がんばれ元気` まで完了済み。
- 2007-07-22〜07-29境界を再監査し、`パチスロ北斗の拳2 乱世覇王伝 天覇の章` がゲッターマウスより前の7月下旬導入機であることを確認したため146件目として先に追加。
- 続けて当時業界記事で2007-07-29納品開始が明確な `ゲッターマウス7R` を147件目として追加。
- 既存性能値はやり直さず、新規機の性能コア + v0.7 resetBehaviorを収集。

## 今回新規追加

### 146. パチスロ北斗の拳2 乱世覇王伝 天覇の章（サミー）

- `docs/real_machine_db/machines/2007-07-23_hokuto-no-ken2-ranse-haouden-tenha.md`
- typeName: `北斗の拳2G`
- releaseDate: `2007-07-23`
  - OFFICIAL/INDUSTRYで2007年7月発売を確認。
  - 2007-07-20サミーネットワークス発表が体験版を「ホール導入に先駆けて」と記載。
  - 2007-07-23当時掲示板ログに「本日からホールに登場」と同日記録あり。日単位は補助根拠扱いで、月単位より信頼度を下げて記録。
- systemType: ボーナス + RT（覇王モード / パンク回避型・減少型RT）
- status/coreStatus: `PARTIAL`
- qaResetBehavior: `PARTIAL`
- BIG合成: `1/336.08 → 1/296.54`
- MID: `1/789.59 → 1/512.00`
- ボーナス合成: `1/235.74 → 1/187.78`
- BIG平均約230枚、MID平均約104枚。
- RT「覇王モード」は約`-0.5枚/G`の減少型。最大500G。
- 機械割は必勝本シミュレート `96.73〜106.83%` とパチマガスロマガ `96.90〜107.25%` に差があるため平均せず `CONFLICT`。
- 通常時50枚ベースは再探索後も比較可能値を確定できず `UNVERIFIED`。RT中50枚ベース約95.6〜103.6Gは通常時ベースと混ぜない。
- 通常時ゲーム数天井、リセット短縮天井、朝一専用恩恵は `NONE_CONFIRMED`。
- 設定変更/据え置き/電源OFF→ON時の内部モード、RT状態処理、本機固有ガックンは十分再探索後も `UNVERIFIED`。
- 有利区間は `NOT_APPLICABLE`。

### 147. ゲッターマウス7R（アルゼ）

- `docs/real_machine_db/machines/2007-07-29_getter-mouse-7r.md`
- typeName: `ゲッターマウス1`
- releaseDate: `2007-07-29`
  - ユニバーサル公式: 2007年7月。
  - グリーンべると2007-07-13: 納品は7月29日より。
- systemType: ボーナス主体/Aタイプ + ハマリ救済RT
- status/coreStatus: `PARTIAL`
- qaResetBehavior: `PARTIAL`
- BIG: `1/287.44 → 1/240.06`（設定1/4/6/H）
- REG: `1/327.68 → 1/240.06`
- 合算: `1/153.12 → 1/120.03`
- 1000円あたりコイン持ち: `35.0 / 35.6 / 36.3 / 37.1G`。
- BIG約312枚、REG/ゲッターチャンス約104枚。
- BIG後1000G / REG後800Gでハマリ救済RT。
- 機械割はHAZUSE `98.7/102.5/107.5/111.0%` とパチマガスロマガ `97.82/101.92/106.47/111.23%` が異なるため `CONFLICT`。
- 救済RTの1Gあたり純増/減少値は十分再探索しても比較可能値を確定できず `UNVERIFIED`。
- P-WORLD当時掲示板には救済G数が「設定変更でも引き継ぐ」とする回答があるが、ユーザー投稿のため `COMMUNITY_SUPPORT / ANALYSIS_SINGLE` に留め、高信頼確定にはしない。
- 電源OFF→ON時の救済G数/RT状態、救済RT中の設定変更処理、本機固有ガックンは `UNVERIFIED`。
- 設定変更専用の短縮天井/朝一専用モード/朝一当選率等は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。

## Bun Bun Maru 境界監査（継続HOLD）

- ALL7.jpは `Bun Bun Maru / 平和 / 2007-07-23` と掲載するが、平和系資料・検定系資料の横断でも2007年パチスロ5号機として独立確認できない。
- 同時期に確実に存在するのはパチンコ `CRスーパーブンブン丸` 系。
- パチスロ独立証拠が出るまで `UNRESOLVED / HOLD`。誤登録しない。

## resetBehavior 遡及QA進捗

- 新規146・147はv0.7形式を同時収集済み。
- 古い既存レコードは、既にresetBehaviorが入っているものを重複改変しない。
- 次回も古い順に欠損有無を確認し、resetBehavior未追加の最古レコードが見つかった場合のみ補完する。

## 今回の主要出典

### パチスロ北斗の拳2 乱世覇王伝 天覇の章
- セガサミーHD資料: https://www.segasammy.co.jp/cms/wp-content/uploads/pdf/ja/ir/2008_2q_stockholder.pdf
- グリーンべると: https://web-greenbelt.jp/00004265/
- 4Gamer / サミーネットワークス発表: https://www.4gamer.net/games/021/G002122/20070720125529/
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/sammy_slot/109/h.php
- パチ＆スロ必勝本: https://p.hisshobon.jp/machine/list.php?c=1&d=14600&mid=929&p=2
- K-Navi: https://p-kn.com/slot/601/
- パチ7回顧: https://pachiseven.jp/articles/detail/10788
- 当時北斗系掲示板ログ: https://hokutosite.com/hokusai/bbs_log/bbslog_2007.html

### ゲッターマウス7R
- ユニバーサル公式: https://www.universal-777.com/product/slot/getter_mouse_7r/
- グリーンべると: https://web-greenbelt.jp/00004245/
- P-WORLD: https://www.p-world.co.jp/machine/database/4826
- HAZUSE: https://hazuse.com/i/data/gettermouse/top.htm
- パチマガスロマガ: https://cs62.cs-plaza.com/g/pachi/pla/s_conq/aruze_slot/01/h.php
- K-Navi: https://p-kn.com/slot/602/
- P-WORLD掲示板: https://www.p-world.co.jp/kisyubbs/bbs.cgi?file=p4826

取得日: 2026-08-31

## 今回GitHub反映

- `パチスロ北斗の拳2 乱世覇王伝 天覇の章` 新規追加: `1b506f4736c18ea2607bcec180f2e41e87039ee1`
- `ゲッターマウス7R` 新規追加: `c371c3b553798387d9abf51fe762106a634c3975`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準147件地点から継続。2007-07-30〜08-05境界を短く再監査し、7月末の未登録5号機がないことを確認してから2007年8月へ進む。**
2. ALL7の2007-07-30一覧は `がんばれ元気` と `ゲッターマウス` 以外にパチンコ機が混在しているため、種別を別資料で確認して誤混入させない。
3. 8月の早い候補は `学習パチスロ算数`（ALL7 2007-08-06）。遊人/当時業界記事/P-WORLD/旧解析で実導入日と性能を確認し、未登録なら性能コア + resetBehaviorを収集する。
4. その後の候補として `戦国無双`、`パタリロ!`、`信長の野望 天下創世 第二の刻` 等が2007-08-20前後に並ぶため、実納品日順を業界記事で確定してから進める。
5. `Bun Bun Maru` はパチスロ独立証拠がない限りHOLD継続。
6. QAは既存全レコードを古い順に確認し、`resetBehavior` 欠損を見つけた最古機から補完。既存COMPLETE_COREは性能完了判定として維持し、resetBehaviorQAを別管理する。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
8. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの147件地点を正**として継続する。
