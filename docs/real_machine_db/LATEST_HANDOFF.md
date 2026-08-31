# 実機DB 最新リレー引継ぎ

更新日: 2026-08-31

## 現在地点

- 最新mainのREADME全文、最新ミッション v0.7、INDEX、LATEST_HANDOFF、既存レコードを再確認して継続。
- INDEXは旧19件地点のまま。README規定どおりLATEST_HANDOFFを進捗正本とする。
- **LATEST_HANDOFF基準150件。**
- 前回149件目 `パタリロ!` まで完了済み。
- 2007-08-20群の境界監査を継続し、`戦国無双` は山佐直営8/8・8/10先行、グリーンべると納品8/19予定、K-Navi一般ホール8/20予定、パチビー8/21と定義差があることを確認。
- 直前引継ぎの指示どおり、戦国無双の時系列本線は一般ホール導入予定2007-08-20とし、150件目として登録。
- 既存性能値はやり直さず、新規機の性能コア + v0.7 resetBehaviorを収集。

## 今回新規追加

### 150. パチスロ戦国無双（山佐）

- `docs/real_machine_db/machines/2007-08-20_sengoku-musou.md`
- releaseDate本線: `2007-08-20`（K-Navi当時業界ニュースの一般ホール導入予定日）
  - 山佐直営先行: 2007-08-08 / 08-10
  - 当時グリーンべると納品開始予定: 2007-08-19
  - パチビー: 2007-08-21
- generation: 5号機
- systemType: A+ART / リプパン回避型ART
- status/coreStatus相当: `PARTIAL`
- qaResetBehavior: `PARTIAL`
- HAZUSE設定別BIG: `1/455.1 → 1/425.6`
- HAZUSE設定別REG/BATTLE GAME: `1/789.6 → 1/728.2`
- HAZUSE合算: `1/288.7 → 1/268.6`
- 機械割は資料競合を平均せず保持:
  - HAZUSE: `97 / 100 / 102 / 104 / 107 / 111%`
  - 5号機クロニクル: `97.4 / 99.6 / 101.7 / 103.9 / 107.0 / 111.4%`
  - 当時5号機まとめwiki: `97 / 99 / 101 / 103 / 106 / 112%`
- BIG純増約274枚、BATTLE GAME約63枚。
- 50枚ベース: 当時グリーンべると `1000円あたり約33G`。
- ART「戦国RUSH」純増:
  - 山佐公式/当時業界: 約1.0枚超〜1.0枚/G
  - P-WORLD/パチビー: 約1.1枚/G
  - 平均せず表記差として保持。
- BIG後は戦国RUSHへ必ず突入。選択武将によりSINナビ/継続システムが変化。BG中信長戦勝利で無限戦国RUSH。
- P-WORLD/パチビーは「天井あり」と分類。ただし初代2007年機の具体的な天井G数/恩恵は、後継機ノイズを避けて再探索しても今回高信頼値を確定できず `UNVERIFIED`。
- 設定変更/据え置き/電源OFF→ON時の天井ゲーム数、戦国チャンス、高確、ART/RT/SINナビ関連状態、本機固有ガックン/変更判別は十分再探索後も `UNVERIFIED`。
- 朝一専用モード、変更時専用当選率/恩恵、公開朝一数値は `NONE_CONFIRMED`。
- 有利区間は `NOT_APPLICABLE`。

## 2007年8月20日境界監査

- `戦国無双` は今回処理済み。
- ALL7では同日候補として `Mr.MARIC / 信長の野望 天下創生 第二の刻` を確認。
- `Mr.MARIC` はベルコ公式で2007年8月登場、ALL7は2007-08-20。
- `信長の野望 天下創生 第二の刻` はALL7/パチビーとも2007-08-20。2007-08-07付プレイグラフ転載では「販売を開始」と確認できるため、次回は販売開始とホール導入日の定義差を精査する。
- ALL7には同日 `ひらけ!ゴマーヤX / 嘉門達夫のたのしい昔話` も掲載されるため、パチスロ種別・既登録有無を同時監査し、漏れ防止を優先する。

## Bun Bun Maru 境界監査（継続HOLD）

- 一部一覧には `Bun Bun Maru-L / -R` が2007年7月パチスロ候補として出るが、平和系資料・検定系資料の横断でも2007年パチスロ5号機として独立確認が弱い。
- 同時期にパチンコ `CRスーパーブンブン丸` 系が存在するため、パチスロ独立証拠が出るまで `UNRESOLVED / HOLD` を継続。

## resetBehavior 遡及QA進捗

- 新規150はv0.7形式を同時収集済み。
- 古い既存レコードは、既にresetBehaviorが入っているものを重複改変しない。
- 次回も古い順に欠損有無を確認し、resetBehavior未追加の最古レコードが見つかった場合のみ補完する。

## 今回の主要出典

### 戦国無双
- 山佐公式: https://yamasa-next.co.jp/model_sgm/
- グリーンべると（2007-07-20）: https://web-greenbelt.jp/00004238/
- K-Navi先行導入ニュース（2007-08-01）: https://p-kn.com/topics/news/294/
- P-WORLD: https://www.p-world.co.jp/machine/database/4848
- パチビー: https://www.pachibee.jp/machines/about/209080028
- HAZUSE: https://hazuse.com/machine/pachislot/7S0470/
- 当時5号機まとめwiki: https://w.atwiki.jp/5gouki/pages/72.html
- 5号機クロニクル山佐: https://5goki.com/yamasa

### 次回境界確認用
- ベルコ公式 ミスターマリック3: https://www.s-bellco.co.jp/products/slot/mister_maric/
- ALL7.jp 2007年8月: https://www.all7.jp/plans/index/2007/08
- Pマンズ / プレイグラフ 2007年8月: https://p-mans.blogspot.com/2007/08/
- HAZUSE 信長の野望 天下創世 第二の刻: https://hazuse.com/i/data/nobunaga2/top.htm
- パチビー 2007年8月導入日: https://www.pachibee.jp/machines/schedule/2007-08

取得日: 2026-08-31

## 今回GitHub反映

- `パチスロ戦国無双` 新規追加: `4d1fc1603a39cd45d8ec42cda5a0d1e6774ecee0`
- 本LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **LATEST_HANDOFF基準150件地点から継続。2007-08-20群の未処理 `Mr.MARIC / 信長の野望 天下創生 第二の刻` を、メーカー公式・当時業界記事の納品/販売開始/一般ホール導入日で比較し、最古未処理から処理する。**
2. `信長の野望 天下創生 第二の刻` は2007-08-07付プレイグラフ転載で販売開始、ALL7/パチビーで8/20ホール導入。販売開始と実導入を混同しない。
3. ALL7同日候補 `ひらけ!ゴマーヤX / 嘉門達夫のたのしい昔話` はパチスロ機かを確認し、対象なら8/20群へ追加する。
4. その後2007-08-24〜08-27群の `そば屋の源さん / 7BOMBER / それゆけエリちゃん` 等を種別確認して進む。
5. `Bun Bun Maru` はパチスロ独立証拠がない限りHOLD継続。
6. QAは既存全レコードを古い順に確認し、`resetBehavior` 欠損を見つけた最古機から補完。既存COMPLETE_COREは性能完了判定として維持し、resetBehaviorQAを別管理する。
7. PARTIAL/UNVERIFIEDは表記揺れ・型式・メーカー・シリーズ名と `設定変更/リセット/朝一/据え置き/電源OFF ON/天井短縮/モード/状態/ガックン/有利区間` を組み替え、公式/業界/当時解析/古いDB/アーカイブ/回顧資料を十分再探索する。
8. INDEXは旧19件地点のため、README規定どおり**LATEST_HANDOFFの150件地点を正**として継続する。
