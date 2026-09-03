# 実機DB 最新リレー引継ぎ

更新日: 2026-09-04

## 現在地点

- recordCount: **516**
- latestMachineAdded: **ビッグシオV**（パイオニア / 全国一斉導入基準 2010-10-04）
- latestRecord: `docs/real_machine_db/machines/2010-10-04_big-shio-v.md`
- chronologicalFrontier: **2010-10-04**
- frontierLatestMachine: **ビッグシオV**
- schema: **resetBehavior v0.7**
- status: **READY_TO_CONTINUE**

## 今回の継続確認

- 最新mainの `README.md`、正本ミッション `docs/CHAPPY5_REAL_MACHINE_DATABASE_MISSION_V01.md` v0.7、`INDEX.md`、`LATEST_HANDOFF.md`、前線実レコードを再取得。
- `INDEX.md` は旧19件地点のため、README規定どおり最新 `LATEST_HANDOFF.md`＋main実レコードを進捗正本として使用。
- 開始時正本地点は recordCount **515** / chronologicalFrontier **2010-09-27**。
- 9/27同日群と9/28〜10/3境界を再監査し、K-Navi全国一斉導入基準の次節点2010-10-04群へ前進。
- **ビッグシオV**がrepo未登録であることを確認して516件目として追加。
- K-Naviは全国一斉導入開始2010-10-04、パイオニア公式は2010年10月発売、P-WORLDは2010年09月導入（月粒度）を記録。全国一斉導入基準と地域先行/月粒度を分離し、平均化しない。

## 516 — ビッグシオV

- メーカー: **パイオニア**
- 全国一斉導入基準: **2010-10-04**
- 地域先行/月粒度記録: **2010-09**（P-WORLD）
- 世代/タイプ: **5号機 / A+ART / 完全告知**
- 機械割: **97 / 98 / 101 / 104 / 107 / 111%**
- SUPER BIG: **全設定1/8191**
- BIG: **1/471 → 1/344**
- REG: **1/474 → 1/346**
- ボーナス合算: **1/229 → 1/169**
- 50枚/1000円: **UNVERIFIED_AFTER_RESEARCH**
- ボーナス純増目安: **SBB約204枚 / BIG約120枚 / REG約30枚**
- ART: **33G/セット・約+1.7枚/G**
- 天井RT: **ART終了後999G+α**
- 型式: **ビッグシオV** / 検定番号 **0S0376**
- coreStatus: **COMPLETE_CORE_RESET_BEHAVIOR_PARTIAL**

### resetBehavior v0.7 — ビッグシオV

- 設定変更しても**天井RTまでのゲーム数はリセットされず引き継ぐ**。
- 設定変更時は**ゲーム数テーブルがリセット**される。
- 設定変更専用の短縮天井は確認なし。前日の天井進捗を利用できるため、P-WORLDは宵越し天井/朝イチゲーム数狙いが有効と明記。旧天井狙い資料も「宵越し○」。
- 据え置きは天井進捗利用が強く支持される一方、ART残りセット等を含む低レベル内部状態の直接説明は未回収。
- 単純電源OFF→ON時の天井/ゲーム数テーブル/ART状態は、検索語・資料系統を変えて再探索しても本機固有直接根拠を確定できず `UNVERIFIED_AFTER_RESEARCH`。
- ガックン・初期出目・ランプ等の確定的変更判別も `UNVERIFIED_AFTER_RESEARCH`。
- 有利区間は5号機のため **NOT_APPLICABLE**。

## CONFLICT / 注意

- 導入時期は定義分離。K-Navi **2010-10-04全国一斉導入開始**、パイオニア公式 **2010年10月発売**、P-WORLD **2010年09月導入（月粒度）**。地域差を考慮し平均化しない。
- P-WORLD上部のSBB+ART約484枚/BIG+ART約176枚/REG+ART約86枚はART込みの表現。ボーナス単体純増約204/120/30枚とは定義を分ける。
- 2020年「ビッグシオ-30」は別機種。50枚ベース等を混入させない。

## 主要出典（取得日 2026-09-04）

- パイオニア公式2010年製品一覧: `https://www.slot-pioneer.co.jp/products/2010.html`
- K-Navi機種ページ: `https://p-kn.com/slot/1274/`
- K-Navi 2010年10月導入カレンダー: `https://p-kn.com/calendar/201010/`
- P-WORLD: `https://www.p-world.co.jp/machine/database/6084`
- グリーンべると: `https://web-greenbelt.jp/00002793/`
- 天井ハイエナ生活: `https://macerate.seesaa.net/article/226312110.html`
- pacnk: `https://pacnk.com/slot/tools/sh_bigsio.html`

## 今回のGitHub更新

- 516 ビッグシオV追加: `docs/real_machine_db/machines/2010-10-04_big-shio-v.md`
- レコード追加commit: `c5d647215422616d6d485a8fb98cd114e5b5cff1`
- LATEST_HANDOFF: このコミット。

## 次回再開地点

1. **recordCount 516 / chronologicalFrontier 2010-10-04**。開始時は必ず最新mainのREADME / mission / INDEX / LATEST_HANDOFF / 前線実レコードを再取得。
2. 2010-10-04同日群を継続。K-Navi候補は **ロケットパニック / 極お父さん ～舞い降りた天使???～ / 出番だ!葉月ちゃん / パチスロピンポン**。
3. **パチスロピンポンは515で登録済みのため重複追加禁止**。
4. ロケットパニックは今回repo検索で未登録を確認済み。次回、公式/業界/当時解析/旧DBを横断して導入日定義とresetBehaviorを確認し、同日群でより早い地域先行機がなければ次レコード候補とする。
5. 同日群を閉じた後、K-Navi次節点の2010-10-16「天空のシンフォニア」までの10/5〜10/15境界を監査する。
6. 遡及QAは既存正本の **Jackまで補完済み + Thunder既収集済み**を維持。新規時系列前進を止めず、次の実在resetBehavior欠損pathが一意確定できた時のみ補完する。
