# 実機DB 最新リレー引継ぎ

更新日: 2026-09-03

## 現在地点

- recordCount: **498**
- latestMachineAdded: **悪魔城ドラキュラII**（KPE / 2010-07-20）
- latestRecord: `docs/real_machine_db/machines/2010-07-20_akumajo-dracula-ii.md`
- chronologicalFrontier: **2010-07-20**
- frontierLatestMachine: **悪魔城ドラキュラII**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコード497「お座敷の茶々」を再取得。
- `INDEX.md` は旧地点のためREADME規定どおり `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時は recordCount **497** / chronologicalFrontier **2010-07-05**。
- 2010-07-06〜07-19の境界を再確認し、次の明確な全国導入パチスロ群2010-07-20へ前進。
- LATEST_HANDOFF指定候補「悪魔城ドラキュラII」をrepo検索し未登録を確認して498件目として追加。

## 498 — 悪魔城ドラキュラII 要約

- メーカー: **KPE**
- 型式名 / 検定番号: **UNVERIFIED_AFTER_RESEARCH**。候補値を推測採用しない。
- 導入主値: **2010-07-20**。K-Naviとパチビーが一致。KONAMI公式アーカイブは2010年7月月粒度で整合。
- 世代/タイプ: **5号機 / A+ART / セットストック式ART / CZ / 通常・天国モード**
- 機械割: **96.7 / 98.9 / 100.4 / 104.4 / 109.0 / 113.1%**。
- ボーナス＋ART/DBB合算: **1/184.3 / 1/182.7 / 1/168.1 / 1/163.9 / 1/145.2 / 1/140.0**。
- DBB突入率: **1/362.9 / 1/361.4 / 1/312.6 / 1/302.0 / 1/246.3 / 1/235.9**。
- REG: **1/374.5 / 1/369.3 / 1/363.8 / 1/358.6 / 1/353.9 / 1/344.1**。
- 50枚ベース: **UNVERIFIED_AFTER_RESEARCH**。
- REG **80枚固定** / バトル目 **MAX80枚**。
- ART「Dracula Battle Bonus」: **約+1.5枚/G / 1セット平均約140枚 / 最大7セットストック**。
- 通常時は**通常/天国モード**と**低確/高確**を確認。
- 十字架最大6個、MAX6個状態の次回ボスバトル/REGでDBB確定。
- 通常天井: **1476G間REG&DBB非成立**。到達即ARTではなく、**次回バトル目またはREGでDBB突入**。
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL_FORMAL_IDENTITY_PARTIAL**

## resetBehavior v0.7 — 悪魔城ドラキュラII

- **設定変更**: K-Navi本機ページに「設定変更後の挙動は?」という専用解析項目が存在することは確認。ただし詳細本文を現存公開ページから回収できず、1476Gカウンタ、通常/天国、低高確、十字架、DBBストック、CZ/ARTのclear/retain/reselectは `UNVERIFIED_AFTER_RESEARCH`。
- **据え置き**: 1476G進捗、モード/状態、十字架、DBBストック/CZの保持範囲は `UNVERIFIED_AFTER_RESEARCH`。
- **電源OFF→ON**: 単純電源再投入時の天井カウンタ・モード・状態・十字架・DBBストック/CZ/ART処理は `UNVERIFIED_AFTER_RESEARCH`。設定変更と同一視しない。
- **ゲーム数/天井**: 通常天井1476Gは確定。設定変更時のクリア/引継ぎ、リセット専用短縮天井は未確認。
- **モード/状態**: 通常/天国と低確/高確は確定。設定変更時の初期振分は未確認。
- **有利区間**: **NOT_APPLICABLE**（5号機・制度前）。
- **朝一恩恵/不利**: 設定変更専用の天国優遇・短縮天井・ART/CZ確定、前日天井/モード/ストック喪失を直接確定できず `NONE_CONFIRMED_AFTER_RESEARCH`。
- **変更判別**: ガックン/初期出目/ステージ/演出等の本機固有確定法は `UNVERIFIED_AFTER_RESEARCH`。
- **公開朝一数値**: 通常天井1476G以外のリセット専用数値は `NONE_CONFIRMED_AFTER_RESEARCH`。

## resetBehavior 遡及QA — 継続地点

- `2006-11_jack-to-mamenoki.md` までv0.7遡及追加済み、という既存正本進捗を維持。
- 今回repo検索では「ジャックと豆の木」直後の実在 `resetBehavior` 欠損ファイルを順序保証付きで一意特定できなかったため、推測でQA進捗を進めていない。
- 次回はmainのrecursive tree / commit履歴 / 2006-11〜12実レコード群から、ジャックと豆の木直後の最初の欠損パスを確定して補完する。
- 新規機種の時系列前進を止めない。

## 主要出典（取得日 2026-09-03）

### 悪魔城ドラキュラII
- KONAMI公式機種アーカイブ: `https://www.konami.com/amusement/psm/archive/ps/2010/dracula2/`
- K-Navi: `https://p-kn.com/slot/1217/`
- パチビー: `https://www.pachibee.jp/machines/index/210050004`
- P-WORLD: `https://www.p-world.co.jp/machine/database/5954`
- 娯楽産業 2010-05-12: `https://www.goraku-sangyo.com/kpe-%E3%80%81%E3%83%91%E3%83%81%E3%82%B9%E3%83%AD%E6%96%B0%E6%A9%9F%E7%A8%AE%E3%80%8C%E6%82%AA%E9%AD%94%E5%9F%8E%E3%83%89%E3%83%A9%E3%82%AD%E3%83%A5%E3%83%A9%E2%85%B1%E3%80%8D%E3%81%AE%E7%99%BA/`
- パチマガスロマガ基本システム: `https://cs62.cs-plaza.com/g/pachi/pla/s_conq/kpe_slot/20/a.php`

## 今回のGitHub更新

- 498 悪魔城ドラキュラII追加: commit `07b6389b27fba3f0470d3af4442313d68c28503f`
- LATEST_HANDOFF更新: このコミット

## 次回再開地点

1. **recordCount 498 / chronologicalFrontier 2010-07-20**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. **2010-07-20同日群**を継続。第一候補は **「幕末浪漫 月華の剣士外伝～あかりと七つの妖珠～」（SNKプレイモア）**。repo重複確認後、未登録なら499件目へ。
3. 2010-07-21〜25を境界監査した後、次の明確な全国導入候補 **2010-07-26「科学忍者隊ガッチャマンGR」（岡崎産業）**へ進む。
4. 遡及QAは `2006-11_jack-to-mamenoki.md` 直後の実在resetBehavior欠損パス確定から再開。
5. 悪魔城ドラキュラIIの型式/検定番号、baseGamesPer50、K-Navi設定変更詳細本文、1476Gカウンタのリセット/据え置き/電源再投入処理、通常/天国・低高確・十字架/DBBストック/CZ処理、変更判別は後続QA対象。
